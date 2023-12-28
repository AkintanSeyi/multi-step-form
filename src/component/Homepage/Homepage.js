import React, { useEffect, useState } from "react";
import * as Style from "./style";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SiApplearcade } from "react-icons/si";
import { FaCheckCircle, FaGamepad } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";

const Homepage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [buttonChange, setbuttonChange] = useState("start");
  const [filterChange, setfilterChange] = useState([]);
  const [sumData, setSumData] = useState([]);
  const [sumNumber, setNumber] = useState();
  const [borderLine, setBorderLine] = useState("");
  const [monthoryear, setMonthorYear] = useState(true);

  const planSection = {
    arcade: {
      price: 12,
      yearprice: 144,
    },
    advance: {
      price: 24,
      yearprice: 288,
    },
    pro: {
      price: 36,
      yearprice: 432,
    },
  };

  const submitNextButton = () => {
    setbuttonChange("next");
  };
  const submitPreviouseButton = () => {
    setbuttonChange("start");
  };

  const handleNextButton = () => {
    if (borderLine != "") {
      setbuttonChange("AddOns");
    }
  };

  const handleNextPreviousButton = () => {
    setbuttonChange("start");
  };
  const handleAddOns = () => {
    if (filterChange.length > 0) {
      setbuttonChange("finish");
      let numbers = sumData;
      console.log(numbers);
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      console.log(sum);
      setNumber(sum);
    }
  };
  const handlePreviouseAddOns = () => {
    setbuttonChange("next");
  };

  const data = [
    {
      id: 1,
      product: "online service",
      characteristics: "access to multiplayer games",
      price: 1,
    },
    {
      id: 2,
      product: "larger storage",
      characteristics: "extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      product: "customizable profile",
      characteristics: "custom theme on your profile",
      price: 4,
    },
    {
      id: 4,
      product: "buy 3500 coins",
      characteristics: "buy cloth and euipments on our store",
      price: 10,
    },
    {
      id: 5,
      product: "Access to battle royal",
      characteristics: "Play the latest battle royal realeased",
      price: 3,
    },
    {
      id: 6,
      product: "lord akingz wond",
      characteristics: "change color and be invisible with it",
      price: 4,
    },
  ];

  const handleInputSubmit = (val) => {
    if (!filterChange.find((value) => value.id == val.id)) {
      filterChange.push(val);
      sumData.push(val.price);

      setfilterChange(filterChange);
    } else if (filterChange.find((value) => value.id == val.id)) {
      //  const dataFilter = dataArray.filter((value) => value.id != val.id);
      //   setfilterChange([...filterChange , val]);
      const listIndexOf = filterChange.indexOf(val);
      const listSumof = sumData.indexOf(val.price);
      const list = filterChange;
      const sumOf = sumData;
      list.splice(listIndexOf, 1);
      sumOf.splice(listSumof, 1);
    }
  };

  const handleFinishPrevious = () => {
    setbuttonChange("AddOns");
    setfilterChange([]);
    setSumData([]);
    setNumber();
  };
  const handleFinish = () => {
    setbuttonChange("done");
    setfilterChange([]);
    setSumData([]);
    setNumber();
    setMonthorYear(true);
  };

  const handleChangeToggle = () => {
    setbuttonChange("next");
    setfilterChange([]);
    setSumData([]);
    setNumber();
  };

  const handleThreeButton = () => {
    setbuttonChange("AddOns");
    setfilterChange([]);
    setNumber();
    setSumData([]);
  };

  return (
    <Style.Homepage>
      <Style.Homepage_Holder>
        <Style.Homepage_FirstSection>
          <Style.Homepage_FirstSectionHolder>
            <Style.Homepage_FirstSectionHolderDiv>
              <Style.Homepage_FirstSectionItemDiv
                onClick={() => setbuttonChange("start")}
                className="firstSectionitem"
              >
                <Style.Homepage_FirstSectionNumberDiv
                  className={buttonChange == "start" ? "numberDiv" : ""}
                >
                  <Style.Homepage_FirstSectionNumberPara>
                    1
                  </Style.Homepage_FirstSectionNumberPara>
                </Style.Homepage_FirstSectionNumberDiv>
                <Style.Homepage_FirstSectionTextDiv>
                  <div>
                    <Style.Homepage_FirstSectionTextHeader1>
                      Your Info
                    </Style.Homepage_FirstSectionTextHeader1>
                  </div>
                </Style.Homepage_FirstSectionTextDiv>
              </Style.Homepage_FirstSectionItemDiv>

              <Style.Homepage_FirstSectionItemDiv
                onClick={() => setbuttonChange("next")}
                className="firstSectionitem"
              >
                <Style.Homepage_FirstSectionNumberDiv
                  className={buttonChange == "next" ? "numberDiv" : ""}
                >
                  <Style.Homepage_FirstSectionNumberPara>
                    2
                  </Style.Homepage_FirstSectionNumberPara>
                </Style.Homepage_FirstSectionNumberDiv>
                <Style.Homepage_FirstSectionTextDiv>
                  <Style.Homepage_FirstSectionTextHeader1>
                    Select Plan
                  </Style.Homepage_FirstSectionTextHeader1>
                </Style.Homepage_FirstSectionTextDiv>
              </Style.Homepage_FirstSectionItemDiv>

              <Style.Homepage_FirstSectionItemDiv
                onClick={handleThreeButton}
                className="firstSectionitem"
              >
                <Style.Homepage_FirstSectionNumberDiv
                  className={buttonChange == "AddOns" ? "numberDiv" : ""}
                >
                  <Style.Homepage_FirstSectionNumberPara>
                    3
                  </Style.Homepage_FirstSectionNumberPara>
                </Style.Homepage_FirstSectionNumberDiv>
                <Style.Homepage_FirstSectionTextDiv>
                  <Style.Homepage_FirstSectionTextHeader1>
                    Add-Ons
                  </Style.Homepage_FirstSectionTextHeader1>
                </Style.Homepage_FirstSectionTextDiv>
              </Style.Homepage_FirstSectionItemDiv>

              <Style.Homepage_FirstSectionItemDiv className="firstSectionitem">
                <Style.Homepage_FirstSectionNumberDiv
                  className={buttonChange == "finish" ? "numberDiv" : ""}
                >
                  <Style.Homepage_FirstSectionNumberPara>
                    4
                  </Style.Homepage_FirstSectionNumberPara>
                </Style.Homepage_FirstSectionNumberDiv>
                <Style.Homepage_FirstSectionTextDiv>
                  <Style.Homepage_FirstSectionTextHeader1>
                    Summary
                  </Style.Homepage_FirstSectionTextHeader1>
                </Style.Homepage_FirstSectionTextDiv>
              </Style.Homepage_FirstSectionItemDiv>
            </Style.Homepage_FirstSectionHolderDiv>
          </Style.Homepage_FirstSectionHolder>
        </Style.Homepage_FirstSection>
        <Style.Homepage_SecondSection>
          <Style.Homepage_SecondSection_Holder>
            {buttonChange == "start" && (
              <>
                <Style.Homepage_SecondSection_1_Header>
                  Personal info
                </Style.Homepage_SecondSection_1_Header>
                <Style.Homepage_SecondSection_1_para>
                  please provide your name , email address , and phone number
                </Style.Homepage_SecondSection_1_para>
                <Form onSubmit={handleSubmit(submitNextButton)}>
                  <Style.Homepage_SecondSection_Holder_1_Div>
                    <Form.Field>
                      <label>Name</label>
                      <input
                        placeholder="Name"
                        type="text"
                        {...register("name", {
                          required: true,
                          maxLength: 50,
                        })}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Email Address</label>
                      <input
                        placeholder="Email"
                        type="email"
                        {...register("email", {
                          required: true,
                          maxLength: 50,
                        })}
                      />
                    </Form.Field>

                    <Form.Field>
                      <label>Phone Number</label>
                      <input
                        placeholder="Phone Number"
                        type="number"
                        {...register("phonenumber", {
                          required: true,
                          maxLength: 50,
                        })}
                      />
                    </Form.Field>
                  </Style.Homepage_SecondSection_Holder_1_Div>

                  <Style.Homepage_SecondSection_Holder_Button_Div>
                    <Style.Homepage_SecondSection_Holder_PreviousButton
                      onClick={submitPreviouseButton}
                      className={buttonChange == "" && "buttonshow"}
                      style={{
                        backgroundColor: "white",
                        color: "blue",
                        border: "1px solid blue",
                        visibility: "hidden",
                        opacity: "0",
                      }}
                    >
                      previous
                    </Style.Homepage_SecondSection_Holder_PreviousButton>
                    <Style.Homepage_SecondSection_Holder_Button
                      onSubmit={handleSubmit(submitNextButton)}
                      type="submit"
                    >
                      next step
                    </Style.Homepage_SecondSection_Holder_Button>
                  </Style.Homepage_SecondSection_Holder_Button_Div>
                </Form>
              </>
            )}
            {buttonChange == "next" && (
              <>
                <Style.Homepage_SecondSection_1_Header>
                  select your plan
                </Style.Homepage_SecondSection_1_Header>
                <Style.Homepage_SecondSection_1_para>
                  you have the option of monthly or yearly billing
                </Style.Homepage_SecondSection_1_para>
                <Style.Homepage_SelectPlan_Div>
                  <Style.Homepage_SelectPlan_Div_Box
                    onClick={() => setBorderLine("arcade")}
                    style={
                      borderLine == "arcade"
                        ? {
                            border: "2px solid darkblue",
                          }
                        : {}
                    }
                  >
                    <Style.Homepage_SelectPlan_Icon_Div
                      style={{
                        backgroundColor: "orange",
                      }}
                    >
                      <SiApplearcade />
                    </Style.Homepage_SelectPlan_Icon_Div>
                    <Style.Homepage_SelectPlan_Text_Div>
                      <Style.Homepage_SelectPlan_Text_Div_Para>
                        arcade
                      </Style.Homepage_SelectPlan_Text_Div_Para>
                      <Style.Homepage_SelectPlan_Text_Div_Sub_Para>
                        +${planSection.arcade.price}/mo
                      </Style.Homepage_SelectPlan_Text_Div_Sub_Para>
                    </Style.Homepage_SelectPlan_Text_Div>
                  </Style.Homepage_SelectPlan_Div_Box>
                  <Style.Homepage_SelectPlan_Div_Box
                    onClick={() => setBorderLine("advance")}
                    style={
                      borderLine == "advance"
                        ? {
                            border: "2px solid darkblue",
                          }
                        : {}
                    }
                  >
                    <Style.Homepage_SelectPlan_Icon_Div
                      style={{
                        backgroundColor: "#fa2a55",
                      }}
                    >
                      <FaGamepad />
                    </Style.Homepage_SelectPlan_Icon_Div>
                    <Style.Homepage_SelectPlan_Text_Div>
                      <Style.Homepage_SelectPlan_Text_Div_Para>
                        advance
                      </Style.Homepage_SelectPlan_Text_Div_Para>
                      <Style.Homepage_SelectPlan_Text_Div_Sub_Para>
                        +${planSection.advance.price}/mo
                      </Style.Homepage_SelectPlan_Text_Div_Sub_Para>
                    </Style.Homepage_SelectPlan_Text_Div>
                  </Style.Homepage_SelectPlan_Div_Box>
                  <Style.Homepage_SelectPlan_Div_Box
                    onClick={() => setBorderLine("pro")}
                    style={
                      borderLine == "pro"
                        ? {
                            border: "2px solid darkblue",
                          }
                        : {}
                    }
                  >
                    <Style.Homepage_SelectPlan_Icon_Div
                      style={{
                        backgroundColor: "rgb(19, 19, 238)",
                      }}
                    >
                      <IoLogoGameControllerB />
                    </Style.Homepage_SelectPlan_Icon_Div>
                    <Style.Homepage_SelectPlan_Text_Div>
                      <Style.Homepage_SelectPlan_Text_Div_Para>
                        pro
                      </Style.Homepage_SelectPlan_Text_Div_Para>
                      <Style.Homepage_SelectPlan_Text_Div_Sub_Para>
                        +${planSection.pro.price}/mo
                      </Style.Homepage_SelectPlan_Text_Div_Sub_Para>
                    </Style.Homepage_SelectPlan_Text_Div>
                  </Style.Homepage_SelectPlan_Div_Box>
                </Style.Homepage_SelectPlan_Div>
                <Style.Homepage_MonthOrYearPlan>
                  <Style.Homepage_MonthOrYearPlanPara>
                    monthly
                  </Style.Homepage_MonthOrYearPlanPara>
                  <Style.Homepage_MonthToggleDiv>
                    <Style.Homepage_MonthToggleLabel>
                      <Style.Homepage_MonthToggleInput
                        className="inputcheck"
                        type="checkbox"
                        onClick={() => setMonthorYear(!monthoryear)}
                      />
                      <Style.Homepage_MonthToggleSpan className="slider"></Style.Homepage_MonthToggleSpan>
                    </Style.Homepage_MonthToggleLabel>
                  </Style.Homepage_MonthToggleDiv>
                  <Style.Homepage_MonthOrYearPlanPara>
                    yearly
                  </Style.Homepage_MonthOrYearPlanPara>
                </Style.Homepage_MonthOrYearPlan>

                <Style.Homepage_SecondSection_Holder_Button_Div>
                  <Style.Homepage_SecondSection_Holder_PreviousButton
                    style={{
                      backgroundColor: "white",
                      color: "blue",
                      border: "1px solid blue",
                    }}
                    onClick={handleNextPreviousButton}
                    className={buttonChange == "" && "buttonshow"}
                  >
                    previous
                  </Style.Homepage_SecondSection_Holder_PreviousButton>

                  <Style.Homepage_SecondSection_Holder_Button
                    onClick={handleNextButton}
                  >
                    next step
                  </Style.Homepage_SecondSection_Holder_Button>
                </Style.Homepage_SecondSection_Holder_Button_Div>
              </>
            )}
            {buttonChange == "AddOns" && (
              <>
                <Style.Homepage_SecondSection_1_Header>
                  pick add-ons
                </Style.Homepage_SecondSection_1_Header>
                <Style.Homepage_SecondSection_1_para>
                  add-ons help enhance our gaming experience
                </Style.Homepage_SecondSection_1_para>
                <Style.AddOns_Div className="addondivs">
                  {data.map((item, index) => {
                    return (
                      <Style.AddOns_InnerDiv>
                        <Style.AddOns_InnerDiv_CheckDiv>
                          <Style.AddOns_InnerDiv_CheckInput
                            onClick={() => handleInputSubmit(item)}
                            type="checkbox"
                          />
                        </Style.AddOns_InnerDiv_CheckDiv>
                        <Style.AddOns_InnerDiv_DecriptionDiv>
                          <Style.AddOns_InnerDiv_DecriptionDivPara>
                            {item.product}
                          </Style.AddOns_InnerDiv_DecriptionDivPara>
                          <Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                            {item.characteristics}
                          </Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                        </Style.AddOns_InnerDiv_DecriptionDiv>
                        <Style.AddOns_InnerDiv_CheckDiv>
                          <Style.AddOns_InnerDiv_SalesPara>
                            +${item.price}
                          </Style.AddOns_InnerDiv_SalesPara>
                        </Style.AddOns_InnerDiv_CheckDiv>
                      </Style.AddOns_InnerDiv>
                    );
                  })}
                </Style.AddOns_Div>
                <Style.Homepage_SecondSection_Holder_Button_Div>
                  <Style.Homepage_SecondSection_Holder_PreviousButton
                    onClick={handlePreviouseAddOns}
                    className={buttonChange == "" && "buttonshow"}
                    style={{
                      backgroundColor: "white",
                      color: "blue",
                      border: "1px solid blue",
                    }}
                  >
                    previous
                  </Style.Homepage_SecondSection_Holder_PreviousButton>

                  <Style.Homepage_SecondSection_Holder_Button
                    onClick={handleAddOns}
                  >
                    next step
                  </Style.Homepage_SecondSection_Holder_Button>
                </Style.Homepage_SecondSection_Holder_Button_Div>
              </>
            )}
            {buttonChange == "finish" && (
              <>
                <Style.Homepage_SecondSection_1_Header>
                  finishing up
                </Style.Homepage_SecondSection_1_Header>
                <Style.Homepage_SecondSection_1_para>
                  double-check everything looks OK before confirming
                </Style.Homepage_SecondSection_1_para>
                <Style.FinsihUpDiv className="addondivs">
                  <Style.FinsihUpMonthAndYearDiv>
                    <Style.AddOns_InnerDiv_DecriptionDiv>
                      <Style.AddOns_FinishUpPara>
                        {borderLine}
                      </Style.AddOns_FinishUpPara>
                      <Style.AddOns_FinishUpSubPara
                        onClick={handleChangeToggle}
                      >
                        change
                      </Style.AddOns_FinishUpSubPara>
                    </Style.AddOns_InnerDiv_DecriptionDiv>
                    <Style.AddOns_InnerDiv_CheckDiv>
                      <Style.AddOns_InnerDiv_SalesPara>
                        {monthoryear == true &&
                          `$${planSection[borderLine]?.price} / mo`}
                        {monthoryear == false &&
                          `$${planSection[borderLine]?.yearprice}/ yr`}
                      </Style.AddOns_InnerDiv_SalesPara>
                    </Style.AddOns_InnerDiv_CheckDiv>
                  </Style.FinsihUpMonthAndYearDiv>
                  {filterChange.map((val) => {
                    return (
                      <Style.FinsihUpItemDiv>
                        <Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                          {val.product}
                        </Style.AddOns_InnerDiv_DecriptionDivDSubPara>

                        <Style.AddOns_InnerDiv_DecriptionDivDSubPara
                          style={{ color: "darkblue" }}
                        >
                          +${val.price}
                        </Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                      </Style.FinsihUpItemDiv>
                    );
                  })}

                  {/*  <Style.FinsihUpItemDiv>
                    <Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                      see1
                    </Style.AddOns_InnerDiv_DecriptionDivDSubPara>

                    <Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                      see2
                    </Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                  </Style.FinsihUpItemDiv>
                  <Style.FinsihUpItemDiv>
                    <Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                      see1
                    </Style.AddOns_InnerDiv_DecriptionDivDSubPara>

                    <Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                      see2
                    </Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                  </Style.FinsihUpItemDiv>
                  <Style.FinsihUpItemDiv>
                    <Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                      see1
                    </Style.AddOns_InnerDiv_DecriptionDivDSubPara>

                    <Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                      see2
                    </Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                  </Style.FinsihUpItemDiv>

                */}
                </Style.FinsihUpDiv>
                <Style.FinsihUpTotalItemDiv>
                  <Style.AddOns_InnerDiv_DecriptionDivDSubPara>
                    total
                  </Style.AddOns_InnerDiv_DecriptionDivDSubPara>

                  <Style.AddOns_InnerDiv_TotalPara>
                    {monthoryear == true &&
                      `$${planSection[borderLine].price + sumNumber}/mo`}

                    {monthoryear == false &&
                      `$${planSection[borderLine].yearprice + sumNumber}/yr`}
                  </Style.AddOns_InnerDiv_TotalPara>
                </Style.FinsihUpTotalItemDiv>
                <Style.Homepage_SecondSection_Holder_Button_Div>
                  <Style.Homepage_SecondSection_Holder_PreviousButton
                    onClick={handleFinishPrevious}
                    className={buttonChange == "" && "buttonshow"}
                    style={{
                      backgroundColor: "white",
                      color: "blue",
                      border: "1px solid blue",
                    }}
                  >
                    previous
                  </Style.Homepage_SecondSection_Holder_PreviousButton>

                  <Style.Homepage_SecondSection_Holder_Button
                    onClick={handleFinish}
                    type="submit"
                  >
                    next step
                  </Style.Homepage_SecondSection_Holder_Button>
                </Style.Homepage_SecondSection_Holder_Button_Div>
              </>
            )}
            {buttonChange == "done" && (
              <Style.Homepage_DoneDiv>
                <Style.Homepage_DoneDiv_IconDiv>
                  <FaCheckCircle />
                </Style.Homepage_DoneDiv_IconDiv>
                <Style.Homepage_DoneDivPara>
                  Thank You!
                </Style.Homepage_DoneDivPara>
                <Style.Homepage_DoneDivSubPara>
                  thank you for confirming your subscription! we hope you have
                  fun using our platform. if you ever need support, please feel
                  free to email us at akintanseyi5@gmail.com
                </Style.Homepage_DoneDivSubPara>
              </Style.Homepage_DoneDiv>
            )}
          </Style.Homepage_SecondSection_Holder>
        </Style.Homepage_SecondSection>
      </Style.Homepage_Holder>
    </Style.Homepage>
  );
};

export default Homepage;
