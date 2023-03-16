import React, { useState } from "react";
import moment from "moment";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import DonutChart from "react-donut-chart";
import { Element } from "react-scroll";
import Modal from "../Modal";
import Cta from "../../elements/Cta";
import FormButton from "../../elements/FormButton";
import DwnImg from "../../assets/images/download.svg";
import ChartBackground from "./ChartBackground";
import {
  Section,
  Calc,
  Results,
  Bar,
  Actions,
  Download,
  DwldIcon,
  FormField,
  RangeLabels,
  Label,
  ChartWrapper,
  ResultOverlay,
  Titles,
  SavingsTitle,
  ErrorLabel,
} from "./styles";
import Spinner from "../../elements/Spinner";
import InfoTool from "../../elements/InfoTool";


const CalcSchema = Yup.object().shape({
  location: Yup.string().required("Please select a location").oneOf(["uk", "north america", "europe", "world"]),
  currency: Yup.string().required("Please select a currency").oneOf(["£", "$", "€"]),
  industry: Yup.string()
    .required("Please select an industry")
    .oneOf([
      "aerospace-defence",
      "business-services",
      "construction-engineering",
      "education",
      "utilities-chemical-utilities",
      "financial-services",
      "food-beverage",
      "government",
      "healthcare",
      "hospitality-travel-tourism",
      "legal",
      "manufacturing",
      "media-entertainment",
      "non-profit",
      "pharmaceutical-biotech",
      "retail",
      "technology",
      "transportation",
      "other",
    ]),
  employees: Yup.number().min(499, "Min value is 500").required("Required Field"),
  avgSalary: Yup.number().min(15000, "Min value is 15,000").max(150000, "Max value is 150,000").required("Required Field"),
  annualSoftwareSpend: Yup.number().min(1000000, "Min value is 1,000,000").required("Required Field"),
  attrition: Yup.number().min(5, "Min value is 5%").max(60, "Max value is 60%"),
  fee: Yup.number().min(10, "Min value is 10%").max(100, "Max value is 100%"),
  acumenReduction: Yup.number().min(5, "Min value is 5%").max(80, "Max value is 80%"),
  hoursLostPerWeek: Yup.number().min(0.5, "Min value is 0.5h").max(10, "Max value is 10h"),
  productivityRegained: Yup.number().min(0.5, "Min value is 0.5h").max(10, "Max value is 10h"),

  budgedSpentOnLicenses: Yup.number().min(10, "Min value is 10%").max(100, "Max value is 100%"),
  budgedSpentOnSaas: Yup.number().min(10, "Min value is 10%").max(100, "Max value is 100%"),
  budgedSpentOnSupport: Yup.number().min(10, "Min value is 10%").max(100, "Max value is 100%"),
});

const Calculator = () => {
  const [totalCalc, setTotalCalc] = useState(0);
  const [working, setWorking] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [calculationValues, setCalculationValues] = useState({
    name: "",
    retention: "",
    productivity: "",

    budgedSpentOnLicenses: "",
    budgedSpentOnSaas: "",
    budgedSpentOnSupport: "",

    employeeTurnoverCount: "",
    costToReplace: "",
    acumenReduction: "",

    hourlyRate: "",
    hoursLostPerWeek: "",
    costOfLostProductivityAnnualy: "",
    productivityRegained: "",
    potentialProductivityHoursRegained: "",
  });
  const [chartData, setChartData] = useState([
    { value: 0, label: "Retention Savings" },
    { value: 0, label: "Productivity Savings" },
    { value: 0, label: "IT Savings" },
  ]);
  const [curr, setCurr] = useState("$");

  const chartColors = ["#74c7ad", "#1B75BC", "#333739"];

  const formValues = {
    location: "",
    currency: "",
    industry: "",
    employees: 5000,
    avgSalary: 50000,
    annualSoftwareSpend: 20000000,
    attrition: 12.5,
    fee: 25,
    acumenReduction: 5,
    hoursLostPerWeek: 1.96,
    productivityRegained: 0.5,
    budgedSpentOnLicenses: 20,
    budgedSpentOnSaas: 30,
    budgedSpentOnSupport: 50,
  };

  const calculate = (values, currency) => {
    const {
      name,
      employees,
      avgSalary,
      annualSoftwareSpend,
      attrition,
      fee,
      acumenReduction,
      hoursLostPerWeek,
      productivityRegained,
      budgedSpentOnLicenses,
      budgedSpentOnSaas,
      budgedSpentOnSupport,
    } = values;

    const employeeTurnoverCount = (employees / 100) * attrition;
    const costToReplace = ((employeeTurnoverCount * avgSalary) / 100) * fee;
    const hourlyRate = avgSalary / 220 / 8;
    const costOfLostProductivityAnnualy = employees * hoursLostPerWeek * hourlyRate * 44;
    const potentialProductivityHoursRegained = employees * productivityRegained * 45;

    const retentionSavings = (costToReplace / 100) * acumenReduction;
    const productivitySavings = employees * productivityRegained * hourlyRate * 45;
    const iTSavings =
      (((budgedSpentOnLicenses / 100) * annualSoftwareSpend) / 100) * 20 +
      (((budgedSpentOnSaas / 100) * annualSoftwareSpend) / 100) * 30 +
      (((budgedSpentOnSupport / 100) * annualSoftwareSpend) / 100) * 25;

    const acumenSavingPotential = retentionSavings + productivitySavings + iTSavings;

    setChartData([
      { value: retentionSavings, label: `Retention Savings` },
      { value: productivitySavings, label: `Productivity Savings` },
      { value: iTSavings, label: `IT Savings` },
    ]);

    setCalculationValues({
      name: name,
      retention: retentionSavings,
      productivity: productivitySavings,

      budgedSpentOnLicenses: budgedSpentOnLicenses,
      budgedSpentOnSaas: budgedSpentOnSaas,
      budgedSpentOnSupport: budgedSpentOnSupport,

      employeeTurnoverCount: employeeTurnoverCount,
      costToReplace: costToReplace,
      acumenReduction: acumenReduction,

      hourlyRate: hourlyRate,
      hoursLostPerWeek: hoursLostPerWeek,
      costOfLostProductivityAnnualy: costOfLostProductivityAnnualy,
      productivityRegained: productivityRegained,
      potentialProductivityHoursRegained: potentialProductivityHoursRegained,

      retentionSavings: retentionSavings,
      productivitySavings: productivitySavings,
      iTSavings: iTSavings,
    });

    setTotalCalc(acumenSavingPotential);

    document.getElementsByTagName("text")[2].textContent = `Retention Savings \n ${currency} ${Number(
      retentionSavings.toFixed(2)
    ).toLocaleString()}`;
    document.getElementsByTagName("text")[3].textContent = `Productivity Savings ${currency} ${Number(
      productivitySavings.toFixed(2)
    ).toLocaleString()}`;
    document.getElementsByTagName("text")[4].textContent = `IT Savings ${currency} ${Number(iTSavings.toFixed(2)).toLocaleString()}`;
  };

  const handleCurrChange = (e) => {
    setCurr(e.target.value);
  };

  return (
    <Element name="calc">
      <Formik
        initialValues={formValues}
        validationSchema={CalcSchema}
        validateOnChange
        onSubmit={async (values) => {
          setWorking(true);
          await new Promise((r) => setTimeout(r, 500));
          setTimeout(() => {
            setCurr(values.currency);
            calculate(values, curr);
            setWorking(false);
            setCalculated(true);
          }, 1500);
        }}
        onReset={async () => {
          setChartData([
            { value: 0, label: "Retention Savings" },
            { value: 0, label: "Productivity Savings" },
            { value: 0, label: "IT Savings" },
          ]);
          setTotalCalc(0);
          setCurr("$");
          setCalculated(false);
        }}
      >
        {({ errors, touched, values, setFieldValue, resetForm, handleChange }) => (
          <Form>
            <Section>
              <Calc>
                <h4 className="grey-dark">About You</h4>
                <FormField>
                  <Label>
                    Location <span>*</span>
                  </Label>
                  <Field as="select" name="location" id="location" className={`${errors.location && touched.location && "input-error"}`}>
                    <option value="select">- Select -</option>
                    <option value="uk">UK</option>
                    <option value="north america">North America</option>
                    <option value="europe">Europe</option>
                    <option value="world">Rest of the World</option>
                  </Field>
                  {errors.location && touched.location ? <ErrorLabel>{errors.location}</ErrorLabel> : null}
                </FormField>
                <FormField>
                  <Label>
                    Preferred Currency <span>*</span>
                  </Label>
                  <Field
                    as="select"
                    name="currency"
                    id="currency"
                    onBlur={handleCurrChange}
                    onChange={handleChange}
                    className={`${errors.currency && touched.currency && "input-error"}`}
                  >
                    <option value="select">- Select -</option>
                    <option value="£">GBP - &pound;</option>
                    <option value="$">USD - &#36;</option>
                    <option value="€">Euro - &euro;</option>
                  </Field>
                  {errors.currency && touched.currency ? <ErrorLabel>{errors.currency}</ErrorLabel> : null}
                </FormField>
                <FormField>
                  <Label>
                    Industry Sector <span>*</span>
                  </Label>
                  <Field as="select" name="industry" id="industry" className={`${errors.industry && touched.industry && "input-error"}`}>
                    <option value="select">- Select -</option>
                    <option value="aerospace-defence">Aerospace &amp; Defense</option>
                    <option value="business-services">Business Services</option>
                    <option value="construction-engineering">Construction &amp; Engineering</option>
                    <option value="education">Education</option>
                    <option value="utilities-chemical-utilities">Utilities, Energy &amp; Chemical</option>
                    <option value="financial-services">Financial Services</option>
                    <option value="food-beverage">Food &amp; Beverage</option>
                    <option value="government">Government</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="hospitality-travel-tourism">Hospitality, Travel, Tourism</option>
                    <option value="legal">Legal</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="media-entertainment">Media &amp; Entertainment</option>
                    <option value="non-profit">Non-Profit</option>
                    <option value="pharmaceutical-biotech">Pharmaceutical &amp; Biotech</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                    <option value="transportation">Transportation</option>
                    <option value="other">Other</option>
                  </Field>
                  {errors.industry && touched.industry ? <ErrorLabel>{errors.industry}</ErrorLabel> : null}
                </FormField>

                <h4 className="grey-dark">Staffing</h4>
                <FormField>
                  <Label>
                    Employees <span>*</span>
                  </Label>
                  <InfoTool text="Number of employees in your organization—including full-time, contingent, and contracted employees." />
                  <Field
                    id="employees"
                    name="employees"
                    type="text"
                    className={`${errors.employees && touched.employees && "input-error"}`}
                  />
                  <Field id="employees" name="employees" type="range" min="500" max="200000" step="500" />
                  <RangeLabels className="smaller light">
                    <small>500</small>
                    <small>200,000 +</small>
                  </RangeLabels>
                  {errors.employees && touched.employees ? <ErrorLabel>{errors.employees}</ErrorLabel> : null}
                </FormField>
                <FormField symbol={curr}>
                  <Label>
                    Averaged Salary <span>*</span>
                  </Label>
                  <InfoTool text="Average fully loaded annual cost, including salary and benefits" />
                  <Field
                    id="avgSalary"
                    name="avgSalary"
                    type="text"
                    min="15000"
                    max="150000"
                    className={`${errors.avgSalary && touched.avgSalary ? "curr-input input-error" : "curr-input"}`}
                  />
                  <Field id="avgSalary" name="avgSalary" type="range" min="15000" max="150000" step="1000" />
                  <RangeLabels className="smaller light">
                    <small>15k</small>
                    <small>150k</small>
                  </RangeLabels>
                  {errors.avgSalary && touched.avgSalary ? <ErrorLabel>{errors.avgSalary}</ErrorLabel> : null}
                </FormField>
                <FormField symbol={curr}>
                  <Label>
                    Annual Software Spend <span>*</span>
                  </Label>
                  <InfoTool text="Annual cost of software applications (net new on-premise, SaaS subscriptions &amp; maintenance) to your organization." />
                  <Field
                    id="annualSoftwareSpend"
                    name="annualSoftwareSpend"
                    type="text"
                    min="1000000"
                    max="100000000"
                    className={`${errors.annualSoftwareSpend && touched.annualSoftwareSpend ? "curr-input input-error" : "curr-input"}`}
                  />
                  <Field id="annualSoftwareSpend" name="annualSoftwareSpend" type="range" min="1000000" max="100000000" step="1000000" />
                  <RangeLabels className="smaller light">
                    <small>1M</small>
                    <small>100M+</small>
                  </RangeLabels>
                  {errors.annualSoftwareSpend && touched.annualSoftwareSpend ? <ErrorLabel>{errors.annualSoftwareSpend}</ErrorLabel> : null}
                </FormField>

                <h4 className="grey-dark">Retention</h4>
                <FormField>
                  <Label>Attrition</Label>
                  <InfoTool text="The U.S. Bureau of Statistics, the average turnover rate in the U.S. is approx 12% to 15% annually." />
                  <Field
                    id="attrition"
                    name="attrition"
                    type="text"
                    min="5"
                    max="60"
                    className={`${errors.attrition && touched.attrition && "input-error"}`}
                  />
                  <Field id="attrition" name="attrition" type="range" min="5" max="60" step="0.5" />
                  <RangeLabels className="smaller light">
                    <small>5%</small>
                    <small>60%</small>
                  </RangeLabels>
                  {errors.attrition && touched.attrition ? <ErrorLabel>{errors.attrition}</ErrorLabel> : null}
                </FormField>
                <FormField>
                  <Label>Recruitment Fee</Label>
                  <InfoTool text="Consider here cost of hire, training costs and time to productivity (normally) 12 weeks" />
                  <Field id="fee" name="fee" type="text" min="10" max="100" className={`${errors.fee && touched.fee && "input-error"}`} />
                  <Field id="fee" name="fee" type="range" min="10" max="100" step="0.5" />
                  <RangeLabels className="smaller light">
                    <small>10%</small>
                    <small>100%</small>
                  </RangeLabels>
                  {errors.fee && touched.fee ? <ErrorLabel>{errors.fee}</ErrorLabel> : null}
                </FormField>
                <FormField>
                  <Label>Potential reduction with Acumen</Label>
                  <Field
                    id="acumenReduction"
                    name="acumenReduction"
                    type="text"
                    min="5"
                    max="80"
                    className={`${errors.acumenReduction && touched.acumenReduction && "input-error"}`}
                  />
                  <Field id="acumenReduction" name="acumenReduction" type="range" min="5" max="80" step="0.5" />
                  <RangeLabels className="smaller light">
                    <small>5%</small>
                    <small>80%</small>
                  </RangeLabels>
                  {errors.acumenReduction && touched.acumenReduction ? <ErrorLabel>{errors.acumenReduction}</ErrorLabel> : null}
                </FormField>

                <h4 className="grey-dark">Productivity</h4>
                <FormField>
                  <Label>Hours lost per week, per employee, due to technology &amp; application issues</Label>
                  <InfoTool text="Source: Data from Scalable DEX2021 survy of 2000 knowledge workers" />
                  <Field
                    id="hoursLostPerWeek"
                    name="hoursLostPerWeek"
                    type="text"
                    min="0.5"
                    max="10"
                    className={`${errors.hoursLostPerWeek && touched.hoursLostPerWeek && "input-error"}`}
                  />
                  <Field id="hoursLostPerWeek" name="hoursLostPerWeek" type="range" min="0.5" max="10" step="0.01" />
                  <RangeLabels className="smaller light">
                    <small>0.5h</small>
                    <small>10h</small>
                  </RangeLabels>
                  {errors.hoursLostPerWeek && touched.hoursLostPerWeek ? <ErrorLabel>{errors.hoursLostPerWeek}</ErrorLabel> : null}
                </FormField>
                <FormField>
                  <Label>Potential Productivity hours regained with Acumen</Label>
                  <InfoTool text="Customer engagements show approximately 30mins immediate savings through optimization of application workflow, reduced application switching and increased stability. Further savings as issues are addressed" />
                  <Field
                    id="productivityRegained"
                    name="productivityRegained"
                    type="text"
                    min="0.5"
                    max="10"
                    className={`${errors.productivityRegained && touched.productivityRegained && "input-error"}`}
                  />
                  <Field id="productivityRegained" name="productivityRegained" type="range" min="0.5" max="10" step="0.01" />
                  <RangeLabels className="smaller light">
                    <small>0.5h</small>
                    <small>10h</small>
                  </RangeLabels>
                  {errors.productivityRegained && touched.productivityRegained ? (
                    <ErrorLabel>{errors.productivityRegained}</ErrorLabel>
                  ) : null}
                </FormField>

                <h4 className="grey-dark">IT Savings</h4>
                <FormField>
                  <Label>% of budget spent on New Licenses</Label>
                  <InfoTool text="New software licences purchased as a percentage of total software spend" />
                  <Field
                    id="budgedSpentOnLicenses"
                    name="budgedSpentOnLicenses"
                    type="text"
                    min="10"
                    max="100"
                    className={`${errors.budgedSpentOnLicenses && touched.budgedSpentOnLicenses && "input-error"}`}
                  />
                  <Field id="budgedSpentOnLicenses" name="budgedSpentOnLicenses" type="range" min="10" max="100" step="5" />
                  <RangeLabels className="smaller light">
                    <small>10%</small>
                    <small>100%</small>
                  </RangeLabels>
                  {errors.budgedSpentOnLicenses && touched.budgedSpentOnLicenses ? (
                    <ErrorLabel>{errors.budgedSpentOnLicenses}</ErrorLabel>
                  ) : null}
                </FormField>
                <FormField>
                  <Label>% of budget spent on SaaS Subscriptions</Label>
                  <InfoTool text="Software licenced on a subscription basis and centrall hosted" />
                  <Field
                    id="budgedSpentOnSaas"
                    name="budgedSpentOnSaas"
                    type="text"
                    min="10"
                    max="100"
                    className={`${errors.budgedSpentOnSaas && touched.budgedSpentOnSaas && "input-error"}`}
                  />
                  <Field id="budgedSpentOnSaas" name="budgedSpentOnSaas" type="range" min="10" max="100" step="5" />
                  <RangeLabels className="smaller light">
                    <small>10%</small>
                    <small>100%</small>
                  </RangeLabels>
                  {errors.budgedSpentOnSaas && touched.budgedSpentOnSaas ? <ErrorLabel>{errors.budgedSpentOnSaas}</ErrorLabel> : null}
                </FormField>
                <FormField>
                  <Label>% of budget spent on Maintenance &amp; Support</Label>
                  <InfoTool text="Maintenance and support costs as a percentage of total software spend" />
                  <Field
                    id="budgedSpentOnSupport"
                    name="budgedSpentOnSupport"
                    type="text"
                    min="10"
                    max="100"
                    className={`${errors.budgedSpentOnSupport && touched.budgedSpentOnSupport && "input-error"}`}
                  />
                  <Field id="budgedSpentOnSupport" name="budgedSpentOnSupport" type="range" min="10" max="100" step="5" />
                  <RangeLabels className="smaller light">
                    <small>10%</small>
                    <small>100%</small>
                  </RangeLabels>
                  {errors.budgedSpentOnSupport && touched.budgedSpentOnSupport ? (
                    <ErrorLabel>{errors.budgedSpentOnSupport}</ErrorLabel>
                  ) : null}
                </FormField>
              </Calc>

              <Results id="chartWrap">
                <Titles>
                  <SavingsTitle>
                    <p className="white light no-margin">Your total expected annual saving</p>
                    <h1 className="white light">
                      {curr} {Number(totalCalc.toFixed(2)).toLocaleString()}
                    </h1>
                  </SavingsTitle>
                </Titles>
                <ChartWrapper>
                  <ChartBackground />
                  <DonutChart
                    id="chart"
                    data={chartData}
                    clickToggle={false}
                    colors={chartColors}
                    strokeColor="transparent"
                    innerRadius={0.8}
                    formatValues={(values) => `${curr || "$"} ${Number(values.toFixed(2)).toLocaleString()}`}
                    selectedOffset={0.05}
                  />
                </ChartWrapper>
                {working && (
                  <ResultOverlay>
                    <Spinner />
                  </ResultOverlay>
                )}
              </Results>
            </Section>
            <Bar>
              <Actions>
                <FormButton label="Calculate" type="submit" />
                <FormButton
                  label="Reset"
                  secondary
                  type="reset"
                  onClick={() => {
                    resetForm();
                  }}
                />
              </Actions>
              <Download>
                {calculated && (
                  <Cta text="Download your business value brief" textColor="white" bgColor="orange" actionClick={() => setShowModal(true)}>
                    <DwldIcon src={DwnImg} />
                  </Cta>
                )}
              </Download>
            </Bar>
          </Form>
        )}
      </Formik>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          retention_savings={`${curr} ${Number(calculationValues.retentionSavings.toFixed(2)).toLocaleString()}`}
          productivity_savings={`${curr} ${Number(calculationValues.productivity.toFixed(2)).toLocaleString()}`}
          it_savings={`${curr} ${Number(calculationValues.iTSavings.toFixed(2)).toLocaleString()}`}
          total={`${curr} ${Number(totalCalc.toFixed(2)).toLocaleString()}`}
          budgedSpentOnLicenses={calculationValues.budgedSpentOnLicenses}
          budgedSpentOnSaas={calculationValues.budgedSpentOnSaas}
          budgedSpentOnSupport={calculationValues.budgedSpentOnSupport}
          employeeTurnoverCount={calculationValues.employeeTurnoverCount}
          costToReplace={`${curr} ${Number(calculationValues.costToReplace.toFixed(2)).toLocaleString()}`}
          acumenReduction={calculationValues.acumenReduction}
          hourlyRate={`${curr} ${Number(calculationValues.hourlyRate.toFixed(2)).toLocaleString()}`}
          hoursLostPerWeek={calculationValues.hoursLostPerWeek}
          costOfLostProductivityAnnualy={`${curr} ${Number(calculationValues.costOfLostProductivityAnnualy.toFixed(2)).toLocaleString()}`}
          potentialProductivityHoursRegained={`${curr} ${Number(
            calculationValues.potentialProductivityHoursRegained.toFixed(2)
          ).toLocaleString()}`}
          date={`${moment().format("MMM Do YYYY")}`}
        />
      )}
    </Element>
  );
};

export default Calculator;
