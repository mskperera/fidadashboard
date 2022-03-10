import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Update from "@material-ui/icons/Update";
import { Accessibility, ThumbUp, ThumbDown, Wc } from "@material-ui/icons";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  otSummaryChart,
  attendanceSummaryChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [state, setState] = React.useState({
    jobCategory: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h3>HR Dashboard</h3>

      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="From"
                format="dd MMM yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="To"
                format="dd MMM yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <FormControl
            style={{ margin: "20px 5px 0 5px", width: "80%" }}
            className={classes.formControl}
          >
            <InputLabel htmlFor="jobCategory-native-helper">Company</InputLabel>
            <NativeSelect
              value={state.jobCategory}
              onChange={handleChange}
              inputProps={{
                name: "jobCategory",
                id: "jobCategory-native-helper",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>All Employees</option>
              <option value={20}>Management Staff</option>
              <option value={30}>Test</option>
            </NativeSelect>
            {/* <FormHelperText>Some important helper text</FormHelperText> */}
          </FormControl>
          <FormControl className={classes.formControl}>
            <Button
              style={{ marginTop: "32px" }}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </FormControl>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                Employees
              </p>
              <h3 className={classes.cardTitle}>245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />a month ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <ThumbUp />
              </CardIcon>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                Presents
              </p>
              <h3 className={classes.cardTitle}>2450</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />a month ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <ThumbDown />
              </CardIcon>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                Absent
              </p>
              <h3 className={classes.cardTitle}>2450</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />a month ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                OT Assigned
              </p>
              <h3 className={classes.cardTitle}>2450</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                on 22 March 2022
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={otSummaryChart.data}
                type="Bar"
                options={otSummaryChart.options}
                responsiveOptions={otSummaryChart.responsiveOptions}
                listener={otSummaryChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>OT Summary</h4>
              <p className={classes.cardCategory}>X:Year, Y: OT Hours</p>
            </CardBody>
            {/* <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={attendanceSummaryChart.data}
                type="Bar"
                options={attendanceSummaryChart.options}
                responsiveOptions={attendanceSummaryChart.responsiveOptions}
                listener={attendanceSummaryChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Attendance Summary</h4>
              <p className={classes.cardCategory}>X: Year, Y: Amount</p>
            </CardBody>
            {/* <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>
                <Wc />
                Attendance Gender Wise: Normal / OT Shifts
              </h4>
            </CardHeader>
            <CardBody>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="From"
                    format="dd MMM yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="To"
                    format="dd MMM yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>

              <FormControl
                style={{ margin: "20px 5px 0 5px", width: "70%" }}
                className={classes.formControl}
              >
                <InputLabel htmlFor="jobCategory-native-helper">
                  Job Category
                </InputLabel>
                <NativeSelect
                  value={state.jobCategory}
                  onChange={handleChange}
                  inputProps={{
                    name: "jobCategory",
                    id: "jobCategory-native-helper",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Workerjjjjjjjjjjjjjjjjjjjj</option>
                  <option value={20}>Exect</option>
                  <option value={30}>Manager</option>
                </NativeSelect>
                {/* <FormHelperText>Some important helper text</FormHelperText> */}
              </FormControl>
              <FormControl className={classes.formControl}>
                <Button
                  style={{ marginTop: "32px" }}
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
              </FormControl>

              <Table
                tableHeaderColor="info"
                tableHead={[
                  "Shift Category",
                  "Remark",
                  "Male",
                  "Female",
                  "Total",
                ]}
                tableData={[
                  ["Normal", "Present", "10", "1", "11.00"],
                  ["Normal", "Absent", "20", "4", "24.00"],
                  ["OT", "Present", "11", "40", "51.00"],
                  ["OT", "Absent", "20", "10", "30.00"],
                ]}
              />
            </CardBody>
            <CardFooter>
              <p style={{ margin: "0" }}>
                * on default it will show details for last 7 days
              </p>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>
                <ThumbUp /> Attendance : Normal / OT Shifts
              </h4>
            </CardHeader>
            <CardBody>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="From"
                    format="dd MMM yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="To"
                    format="dd MMM yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <FormControl className={classes.formControl}>
                <Button
                  style={{ marginTop: "32px" }}
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
              </FormControl>
              <Table
                tableHeaderColor="info"
                tableHead={["Shift Category", "Remark", "Total"]}
                tableData={[
                  ["Normal", "Present", "11.00"],
                  ["Normal", "Absent", "24.00"],
                  ["OT", "Present", "51.00"],
                  ["OT", "Absent", "30.00"],
                ]}
              />
            </CardBody>
            <CardFooter>
              <p style={{ margin: "0" }}>
                * on default it will show details for last 7 days
              </p>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>
                <ThumbUp />
                Attendance : Normal / OT Shifts
              </h4>
            </CardHeader>
            <CardBody>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="From"
                    format="dd MMM yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="To"
                    format="dd MMM yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>

              <FormControl
                style={{ margin: "20px 5px 0 5px", width: "80%" }}
                className={classes.formControl}
              >
                <InputLabel htmlFor="jobCategory-native-helper">
                  Group
                </InputLabel>
                <NativeSelect
                  value={state.jobCategory}
                  onChange={handleChange}
                  inputProps={{
                    name: "jobCategory",
                    id: "jobCategory-native-helper",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>All Employees</option>
                  <option value={20}>Management Staff</option>
                  <option value={30}>Test</option>
                </NativeSelect>
                {/* <FormHelperText>Some important helper text</FormHelperText> */}
              </FormControl>
              <FormControl className={classes.formControl}>
                <Button
                  style={{ marginTop: "32px" }}
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
              </FormControl>
              <Table
                tableHeaderColor="info"
                tableHead={["Shift Category", "Remark", "Total"]}
                tableData={[
                  ["Normal", "Present", "11.00"],
                  ["Normal", "Absent", "24.00"],
                  ["OT", "Present", "51.00"],
                  ["OT", "Absent", "30.00"],
                ]}
              />
            </CardBody>
            <CardFooter>
              <p style={{ margin: "0" }}>
                * on default it will show details for last 7 days
              </p>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>
                <ThumbUp /> Attendance : Normal / OT Shifts by Shifts
              </h4>
            </CardHeader>
            <CardBody>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="From"
                    format="dd MMM yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="To"
                    format="dd MMM yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <FormControl
                style={{ margin: "20px 5px 0 5px", width: "80%" }}
                className={classes.formControl}
              >
                <InputLabel htmlFor="jobCategory-native-helper">
                  Shift
                </InputLabel>
                <NativeSelect
                  value={state.jobCategory}
                  onChange={handleChange}
                  inputProps={{
                    name: "jobCategory",
                    id: "jobCategory-native-helper",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>General</option>
                  <option value={20}>Weekdays</option>
                </NativeSelect>
                {/* <FormHelperText>Some important helper text</FormHelperText> */}
              </FormControl>
              <FormControl className={classes.formControl}>
                <Button
                  style={{ marginTop: "32px" }}
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
              </FormControl>
              <Table
                tableHeaderColor="info"
                tableHead={["Shift Category", "Remark", "Total"]}
                tableData={[
                  ["Normal", "Present", "11.00"],
                  ["Normal", "Absent", "24.00"],
                  ["OT", "Present", "51.00"],
                  ["OT", "Absent", "30.00"],
                ]}
              />
            </CardBody>
            <CardFooter>
              <p style={{ margin: "0" }}>
                * on default it will show details for last 7 days
              </p>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Line"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>
                Attendance:Bar Chart for all Companies
              </h4>
              <p className={classes.cardCategory}>X:Year, Y: OT Hours</p>
            </CardBody>
            <CardFooter chart>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="From"
                    format="dd MMM yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="To"
                    format="dd MMM yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <FormControl className={classes.formControl}>
                <Button
                  style={{ marginTop: "32px" }}
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
              </FormControl>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Attendance Summary</h4>
              <p className={classes.cardCategory}>X: Year, Y: Amount</p>
            </CardBody>
            {/* <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
