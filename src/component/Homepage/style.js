import { styled } from "@mui/material";

export const Homepage = styled("div")({
  width: "100vw",
  height: "100vh",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(236, 243, 245)",
});

export const Homepage_Holder = styled("div")({
  width: "80%",
  height: "85%",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "white",
  display: "flex",
  boxShadow: `0 2rem 4rem rgba(0, 0, 0, 0.15)`,

  "@media (max-width : 75em)": {
    width: "95%",
    height: "60%",
  },
  "@media (max-width : 45em)": {
    display: "block",
    height: "75%",
    position: "relative",
  },
  "@media (max-width : 29.4em)": {
    height: "80%",
  },
  "@media (max-width : 23.75em)": {
    height: "97%",
  },
});

export const Homepage_FirstSection = styled("div")({
  width: "25%",
  height: "100%",
  marginRight: "15px",
  "@media (max-width : 45em)": {
    width: "100%",
    height: "30%",
    marginRight: "0px",
  },
});

export const Homepage_FirstSectionHolder = styled("div")({
  width: "100%",
  height: "100%",
  backgroundColor: "blue",
  borderRadius: "7px",
  padding: "12px",
});

export const Homepage_SecondSection = styled("div")({
  width: "75%",
  height: "100%",

  "@media (max-width : 45em)": {
    width: "85%",
    height: "70%",
    marginRight: "0px",
    position: "absolute",
    top: "21.5%",
    left: "7%",
    borderRadius: "12px",
  },
  "@media (max-width : 29.4em)": {
    width: "90%",
    left: "5%",
  },
  "@media (max-width : 23.75em)": {
    height: "71%",
  },
});
export const Homepage_SecondSection_Holder = styled("div")({
  width: "100%",
  height: "100%",
  // padding: "15px",
  backgroundColor: "white",
  padding: "60px 35px 35px 100px",
  "@media (max-width : 45em)": {
    borderRadius: "8px",
    backgroundColor: "rgb(236, 243, 245)",
    padding: "60px 15px 15px 75px",
  },
  "@media (max-width : 37.5em)": {
    padding: "60px 15px 15px 35px",
  },
  "@media (max-width : 29.4em)": {
    padding: "60px 15px 15px 25px",
  },
  "@media (max-width : 23.75em)": {
    padding: "20px 15px 15px 15px",
  },
});

export const Homepage_DoneDiv = styled("div")({
  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Homepage_DoneDiv_IconDiv = styled("div")({
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  backgroundColor: "#fa2a55",
  marginBottom: "10px",
  // padding: "30px",
  display: "flex",
  fontSize: "40px",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width : 45em)": {
    width: "60px",
    height: "60px",
    fontSize: "30px",
  },
});
export const Homepage_DoneDivPara = styled("p")({
  fontSize: "25px",
  textTransform: "capitalize",
  color: "rgb(6, 6, 34)",
  fontWeight: "bold",
  "@media (max-width : 45em)": {
    fontSize: "19px",
  },
});

export const Homepage_DoneDivSubPara = styled("p")({
  fontSize: "15px",
  textTransform: "capitalize",
  textAlign: "center",
  width: "80%",
  marginTop: "-15px",
  color: "grey",
  "@media (max-width : 45em)": {
    fontSize: "13px",
    width: "90%",
  },
});

export const Homepage_SelectPlan_Icon_Div = styled("div")({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  color: "white",
  "@media (max-width : 45em)": {
    width: "35px",
    height: "35px",
    marginRight: "12.5px",
  },
});

export const Homepage_SelectPlan_Text_Div = styled("div")({
  width: "100%",
  height: "fit-content",
  color: "darkcyan",
});

export const Homepage_SelectPlan_Text_Div_Para = styled("p")({
  textTransform: "capitalize",
  fontSize: "14.5px",
  fontWeight: "bold",
  "@media (max-width : 45em)": {
    fontSize: "13px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "12.5px",
  },
});
export const Homepage_SelectPlan_Text_Div_Sub_Para = styled("p")({
  fontSize: "12.5px",
  fontWeight: "bold",
  color: "darkcyan",
  marginTop: "-13px",
  "@media (max-width : 45em)": {
    fontSize: "11px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "10.5px",
  },
});

export const AddOns_Div = styled("div")({
  width: "82%",
  height: "58%",
  borderRadius: "3px",

  overflow: "scroll",
  padding: "10px",
  "@media (max-width : 45em)": {
    width: "90%",
  },
  "@media (max-width : 37.5em)": {
    width: "94%",
  },
  "@media (max-width : 29.4em)": {
    width: "97%",
    height: "83%",
  },
});

export const FinsihUpDiv = styled("div")({
  width: "82%",
  height: "47%",
  borderRadius: "8px",
  backgroundColor: "rgb(236, 243, 245)",
  overflow: "scroll",
  padding: "10px",
  "@media (max-width : 45em)": {
    width: "90%",
  },
  "@media (max-width : 37.5em)": {
    width: "94%",
  },
});

export const FinsihUpMonthAndYearDiv = styled("div")({
  width: "100%",
  height: "50px",

  borderBottom: "1px solid grey",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const AddOns_InnerDiv = styled("div")({
  width: "100%",
  height: "80px",
  borderRadius: "8px",
  cursor: "pointer",
  border: "2.5px solid blue",
  marginBottom: "25px",
  display: "flex",
  backgroundColor: "rgb(236, 243, 245)",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  "@media (max-width : 23.75em)": {
    height: "55px",
    padding: "5px",
  },
});

export const AddOns_InnerDiv_CheckInput = styled("input")({
  width: "40%",
  height: "40%",
  borderRadius: "5px",
  cursor: "pointer",
});

export const AddOns_InnerDiv_DecriptionDivPara = styled("h3")({
  textTransform: "capitalize",
  fontSize: "12px",
  color: "darkblue",
  "@media (max-width : 37.5em)": {
    fontSize: "11px",
  },
  "@media (max-width : 23.75em)": {
    fontSize: "10px",
  },
});

export const AddOns_FinishUpPara = styled("h3")({
  textTransform: "capitalize",
  fontSize: "15.5px",
  color: "darkblue",
  "@media (max-width : 45em)": {
    fontSize: "14.5px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "13px",
  },
});

export const AddOns_InnerDiv_SalesPara = styled("p")({
  fontSize: "14px",
  color: "blue",

  "@media (max-width : 45em)": {
    fontSize: "13.5px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "13px",
  },
  "@media (max-width : 23.75em)": {
    fontSize: "11.5px",
  },
});

export const AddOns_InnerDiv_DecriptionDivDSubPara = styled("p")({
  textTransform: "capitalize",
  fontSize: "14px",
  color: "grey",
  marginTop: "-7px",
  "@media (max-width : 37.5em)": {
    fontSize: "12px",
    marginTop: "-4px",
  },
  "@media (max-width : 23.75em)": {
    fontSize: "10.5px",
  },
});

export const AddOns_InnerDiv_TotalPara = styled("p")({
  fontSize: "18px",
  color: "blue",
  "@media (max-width : 45em)": {
    fontSize: "16.5px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "15px",
  },
  "@media (max-width : 23.75em)": {
    fontSize: "13.5px",
  },
});
export const AddOns_FinishUpSubPara = styled("p")({
  textTransform: "capitalize",
  marginTop: "-10px",
  fontSize: "12px",
  color: "blue",
  textDecoration: "underline",
  cursor: "pointer",
  paddingBottom: "10px",
  "@media (max-width : 45em)": {
    fontSize: "9.5px",
  },
});

export const AddOns_InnerDiv_DecriptionDiv = styled("div")({
  width: "280px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
});

export const FinsihUpTotalItemDiv = styled("div")({
  width: "82%",
  height: "30px",
  display: "flex",
  justifyContent: "space-between",
  //alignItems: "center",
  paddingTop: "5px",
  marginTop: "25px",
  "@media (max-width : 45em)": {
    width: "90%",
  },
  "@media (max-width : 37.5em)": {
    width: "94%",
  },
});

export const FinsihUpItemDiv = styled("div")({
  width: "100%",
  height: "30px",

  display: "flex",
  justifyContent: "space-between",
  //alignItems: "center",
  paddingTop: "5px",
  marginTop: "5px",
});

export const AddOns_InnerDiv_CheckDiv = styled("div")({
  width: "35px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Homepage_SelectPlan_Div = styled("div")({
  width: "80%",
  height: "40%",
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width : 45em)": {
    width: "90%",
    display: "block",
    height: "fit-content",
    // backgroundColor: "red",
  },
  "@media (max-width : 37.5em)": {
    width: "94%",
  },
  "@media (max-width : 29.4em)": {
    width: "97%",
    height: "fit-content",
  },
});
export const Homepage_SelectPlan_Div_Box = styled("div")({
  width: "120px",
  display: "flex",
  cursor: "pointer",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "90%",
  borderRadius: "10px",
  border: "1.5px solid lightblue",
  marginRight: "15px",
  padding: "12px",
  "@media (max-width : 45em)": {
    width: "100%",
    height: "65px",
    marginBottom: "13px",
    marginRight: "0px",
    padding: "8px",
    flexDirection: "row",
    alignItems: "center",
  },
});

export const Homepage_FirstSectionItemDiv = styled("div")({
  width: "65%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  color: "white",

  // padding: "5px",
  // marginTop: "5px",
  marginBottom: "10px",
  "&:hover": {
    color: "rgb(6, 6, 34)",
  },
  "@media (max-width : 62.5em)": {
    width: "90%",
  },
  "@media (max-width : 45em)": {
    width: "fit-content",
  },
});

export const Homepage_FirstSectionNumberDiv = styled("div")({
  width: "50px",
  height: "37px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  marginRight: "10px",
  paddingTop: "4px",

  justifyContent: "center",
  border: "2px solid white",
  "@media (max-width : 45em)": {
    marginRight: "30px",
    width: "40px",
    height: "45px",
  },
  "@media (max-width : 23.75em)": {
    marginRight: "15px",
    width: "37px",
    height: "42px",
  },
});
export const Homepage_SecondSection_Holder_Button_Div = styled("div")({
  width: "80%",
  marginTop: "25.5px",
  height: "65px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width : 45em)": {
    width: "90%",
  },
  "@media (max-width : 37.5em)": {
    width: "94%",
  },
  "@media (max-width : 29.4em)": {
    width: "97%",
  },
});
export const Homepage_SecondSection_Holder_Button = styled("button")({
  width: "80px",
  backgroundColor: "blue",
  height: "35px",
  borderRadius: "6px",
  border: "none",
  outline: "none",
  fontWeight: "bold",
  fontSize: "12.5px",
  textTransform: "capitalize",
  padding: "10px",
  cursor: "pointer",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 37.5em)": {
    fontSize: "11.5px",
  },
  "@media (max-width : 29.4em)": {
    position: "fixed",
    bottom: "12%",
    right: "10%",
  },
  "@media (max-width : 23.75em)": {
    bottom: "3.7%",
    height: "33px",
  },
});

export const Homepage_SecondSection_Holder_PreviousButton = styled("button")({
  width: "80px",
  backgroundColor: "blue",
  height: "35px",
  borderRadius: "6px",
  border: "none",
  outline: "none",
  fontWeight: "bold",
  fontSize: "12.5px",
  textTransform: "capitalize",
  padding: "10px",
  cursor: "pointer",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 37.5em)": {
    fontSize: "11.5px",
  },
  "@media (max-width : 29.4em)": {
    position: "fixed",
    bottom: "12%",
    left: "10%",
  },
  "@media (max-width : 23.75em)": {
    bottom: "3.7%",
    height: "33px",
  },
});

export const Homepage_FirstSectionTextDiv = styled("div")({
  width: "130px",
  display: "flex",

  alignItems: "center",
  height: "70%",

  color: "white",
  cursor: "pointer",
  "@media (max-width : 45em)": {
    display: "none",
  },
});

export const Homepage_FirstSectionTextHeader1 = styled("p")({
  fontSize: "14px",

  "&:hover": {
    color: "rgb(6, 6, 34)",
  },
});
export const Homepage_ErrorPara = styled("p")({
  fontSize: "12px",
  color: "red",
});

export const Homepage_FirstSectionTextHeader2 = styled("p")({
  fontSize: "17px",
});

export const Homepage_FirstSectionNumberPara = styled("p")({
  fontSize: "16px",
  "@media (max-width : 30em)": {
    fontSize: "14px",
  },
});

export const Homepage_FirstSectionHolderDiv = styled("div")({
  width: "100%",
  height: "65%",

  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",

  padding: "12px 0px 12px 35px",

  "@media (max-width : 53.75em)": {
    padding: "12px 0px 12px 10px",
  },
  "@media (max-width : 45em)": {
    display: "flex",
    height: "100%",
    width: "100%",

    alignItems: "center",
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
  },
});

export const Homepage_SecondSection_Holder_1_Div = styled("div")({
  width: "80%",
  height: "70%",
  // padding: "15px",

  marginTop: "15px",
  "@media (max-width : 45em)": {
    width: "90%",
  },
  "@media (max-width : 37.5em)": {
    width: "94%",
  },
  "@media (max-width : 29.4em)": {
    width: "97%",
  },
});

export const Homepage_SecondSection_1_Header = styled("h3")({
  textTransform: "capitalize",
  fontSize: "28px",
  marginBottom: "10px",
  "@media (max-width : 53.75em)": {
    fontSize: "23px",
  },
  "@media (max-width : 45em)": {
    fontSize: "20px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "19px",
  },
});

export const Homepage_SecondSection_1_para = styled("p")({
  textTransform: "capitalize",
  fontSize: "15px",
  "@media (max-width : 53.75em)": {
    fontSize: "13.5px",
  },
  "@media (max-width : 45em)": {
    fontSize: "13px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "12.5px",
  },
});

export const Homepage_MonthToggleDiv = styled("div")({
  width: "fit-content",
  marginTop: "2px",
  height: "fit-content",
});

export const Homepage_MonthToggleLabel = styled("label")({
  position: "relative",
  display: "inline-block",
  height: "20px",
  width: "31.5px",
  borderRadius: "40%",
  "@media (max-width : 37.5em)": {},
});
export const Homepage_MonthToggleSpan = styled("span")({});

export const Homepage_MonthToggleInput = styled("input")({});

export const Homepage_MonthOrYearPlan = styled("div")({
  width: "80%",
  height: "80px",
  backgroundColor: "rgb(236, 234, 234)",
  marginTop: "20px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  paddingTop: "30px",
  "@media (max-width : 45em)": {
    width: "90%",
  },
  "@media (max-width : 37.5em)": {
    width: "94%",
  },
  "@media (max-width : 29.4em)": {
    width: "97%",
  },
});

export const Homepage_MonthOrYearPlanPara = styled("p")({
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: "bold",
  marginRight: "10px",
  marginLeft: "10px",
  "@media (max-width : 37.5em)": {
    fontSize: "13.5px",
  },
});
