import  { useEffect, useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import {useHistory, useNavigate} from "react-router"
const KEY =
  "pk_test_51K5VjILMS55jtNeisvOeXMOjdVvlHrArHeBMbGP853p1NZAsSur8eONDwWOlTFwKNg9Kv0VeANfzrwfLk5jznpgH00ldbbjzfS";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate()
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect (() => {
      const makeRequest = async () => {
        try {
          const res = await axios.post(
            "http://localhost:5000/api/checkout/payment" ,{
                tokenId:stripeToken.id,
                amount:2000,
            }
          );
          console.log(res.data)
          navigate.push("/success")
        } catch (err) {
          console.error(err)
        }
      };
        stripeToken && makeRequest()
    },[stripeToken]);


    return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >

      {stripeToken ?(
        <span>Processing.Please Waite...</span>
      ):(

        <StripeCheckout
        name="Ahmed Shop"
        image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-shop-ecommerce-logo-app-icon-logo-design-template-910c781293690546d77a3828f9e901ee_screen.jpg?ts=1611442808"
        billingAddress
        shippingAddress
        description="your total is 20$"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >

        <button
          style={{
            brder: "none",
            borderRadius: 5,
            backgroundColor: "black",
            width: 120,
            padding: "20px",
            fontWeight: "600",
            cursor: "pointer",
            color: "white",
          }}
        >

          Pay Now
        </button>
      </StripeCheckout>
        )}
    </div>
  );
};

export default Pay;
