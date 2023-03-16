import React, { useState } from "react";
import axios from "axios";
import { PDFDocument } from "pdf-lib";
import download from "downloadjs";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { FormField, Label, ErrorLabel } from "../Calculator/styles";
import { Overlay, ModalBody, ButtonWrap, EmailError, FormOverlay } from "./styles";
import FormButton from "../../elements/FormButton";
import Spinner from "../../elements/Spinner";

const formValues = { name: "", company: "", email: "" };

const ABSTRACTAPIKEY = "9e221a234b2449f68c2095d66823ec59";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  company: Yup.string().required("Please enter your company name"),
  email: Yup.string().email("Invalid email format").required("Please enter your email"),
});

const Modal = ({
  setShowModal,
  retention_savings,
  productivity_savings,
  it_savings,
  total,
  budgedSpentOnLicenses,
  budgedSpentOnSaas,
  budgedSpentOnSupport,
  employeeTurnoverCount,
  costToReplace,
  acumenReduction,
  hourlyRate,
  hoursLostPerWeek,
  costOfLostProductivityAnnualy,
  potentialProductivityHoursRegained,
  date,
}) => {
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPdf = async (name) => {
    // Fetch the PDF with form fields
    const formUrl = "/pdf/Scalable_Value_Calculator_Report.pdf";
    const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());

    // Load a PDF with form fields
    const pdfDoc = await PDFDocument.load(formPdfBytes);

    // Get the form containing all the fields
    const form = pdfDoc.getForm();

    // Fill the form's fields
    form.getTextField("Prepared for").setText(name);
    form.getTextField("Dated").setText(date);
    form.getTextField("Saving").setText(`${total}`);

    form.getTextField("B45").setText(`${retention_savings}`);
    form.getTextField("B46").setText(`${productivity_savings}`);
    form.getTextField("B47").setText(`${it_savings}`);

    form.getTextField("IT Savings 1").setText(`${budgedSpentOnLicenses} %`);
    form.getTextField("IT Savings 2").setText(`${budgedSpentOnSaas} %`);
    form.getTextField("IT Savings 3").setText(`${budgedSpentOnSupport} %`);

    form.getTextField("Retention Savings 1").setText(`${employeeTurnoverCount}`);
    form.getTextField("Retention Savings 2").setText(`${costToReplace}`);
    form.getTextField("Retention Savings 3").setText(`${acumenReduction} %`);

    form.getTextField("Productivity Savings 1").setText(`${hourlyRate}`);
    form.getTextField("Productivity Savings 2").setText(`${hoursLostPerWeek} h`);
    form.getTextField("Productivity Savings 3").setText(`${costOfLostProductivityAnnualy}`);
    form.getTextField("Productivity Savings 4").setText(`${potentialProductivityHoursRegained}`);

    // Flatten the form's fields
    form.flatten();

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Trigger the browser to download the PDF document
    download(pdfBytes, `${name.replace(/ /g, "_")}_${date.replace(/ /g, "_")}_Value_Calculator_Report.pdf`, "application/pdf");
  };

  const handleSubmit = (values, setFieldValue) => {
    setShowError(false);
    setLoading(true);

    // Verify email
    axios
      .get(`https://emailvalidation.abstractapi.com/v1/?api_key=${ABSTRACTAPIKEY}&email=${values.email}`)
      .then((response) => {
        if (response.data.deliverability === "DELIVERABLE") {
          // Fill spreadsheet
          axios
            .post("https://sheet.best/api/sheets/0bac62a6-4459-4eb6-9284-1434d9e534e7", {
              ...values,
              retention_savings,
              productivity_savings,
              it_savings,
            })
            .then((response) => {
              setShowModal(false);
              setLoading(false);
              getPdf(values.name);
            });
        } else {
          setFieldValue("email", "");
          setLoading(false);
          setShowError(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Overlay>
      <ModalBody>
        <p>Please enter your details and download your business value brief </p>
        {showError && <EmailError className="input-error">Invalid email address</EmailError>}
        <Formik
          initialValues={formValues}
          validationSchema={formSchema}
          validateOnChange
          onSubmit={(values, { setFieldValue }) => {
            handleSubmit(values, setFieldValue);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormField>
                <Label>
                  Name <span>*</span>
                </Label>
                <Field id="name" name="name" type="text" className={`${errors.name && touched.name && "input-error"}`} />
                {errors.name && touched.name ? <ErrorLabel>{errors.name}</ErrorLabel> : null}
              </FormField>
              <FormField>
                <Label>
                  Company <span>*</span>
                </Label>
                <Field id="company" name="company" type="text" className={`${errors.company && touched.company && "input-error"}`} />
                {errors.company && touched.company ? <ErrorLabel>{errors.company}</ErrorLabel> : null}
              </FormField>
              <FormField>
                <Label>
                  Email <span>*</span>
                </Label>
                <Field id="email" name="email" type="text" className={`${errors.email && touched.email && "input-error"}`} />
                {errors.email && touched.email ? <ErrorLabel>{errors.email}</ErrorLabel> : null}
              </FormField>
              <ButtonWrap>
                <FormButton label="Download" type="submit" />
                <FormButton secondary label="Cancel" type="button" action={() => setShowModal(false)} />
              </ButtonWrap>
            </Form>
          )}
        </Formik>
        {loading && (
          <FormOverlay>
            <Spinner dark />
          </FormOverlay>
        )}
      </ModalBody>
    </Overlay>
  );
};

export default Modal;
