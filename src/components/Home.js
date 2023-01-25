import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Contact.css";
import carton from "../image/download.png"

export default function Home() {
  return (
    <div>

      <div className='super'>
        <div className='container'>
          <div className='contact'>
            <h2>Contact</h2>
            <p>Do you have an account? 
              <span><Link to="/login">Login</Link></span></p>
          </div>
          <div>
            
            <form action="">
              <div className='contact-1'>
                <input type="text" placeholder='Email or phone number'/>
                <div className='tickBox-1'>
                  <input type="checkbox" id="" name="" value="" />
                  <label for=""> Add me to Candleaf newsletter for a 10% discount</label>
                </div>
              </div>
              <div className='shipping'>
                <h1>Shipping Address</h1>
                <div className="name">
                  <input id='first-name' type="text" placeholder='Name'/>
                  <input type="text" placeholder='Second Name'/>
                </div>
                <input className='add-note' id='add-note-1' type="text" placeholder='Address and Number'/>
                <input className='add-note' type="text" placeholder='Shipping note (optional)'/>
                <div className="city">
                  <input type="text" placeholder='City'/>
                  <input type="text" placeholder='Postal Code'/>
                  <select name="" id="select-1">
                    <option value="Province">Province</option>
                    <option value="Province">Province</option>
                    <option value="Province">Province</option>
                    <option value="Province">Province</option>
                  </select>
                </div>
                <div className="last">
                  <select name="" id="">
                    <option value="Province">Province</option>
                    <option value="Province">Province</option>
                    <option value="Province">Province</option>
                    <option value="Province">Province</option>
                  </select>
                  <div>
                    <input type="checkbox" id="" name="" value="" />
                    <label for=""> Add me to Candleaf newsletter for a 10% discount</label>
                  </div>
                </div>
              </div>
              <div className='back-btn'>
                <button>Back to Cart</button>
                <button>Go to shipping</button>
              </div>
            </form>

          </div>
        </div>
        <div className='container-2'>
        <div className="right-1">
          <img src={carton} alt="" srcset="" />
          <div className='right-11'>
            <h4>Spiced Mint Candleaf</h4>
            <h2>$ 9.99</h2>
          </div>
        </div>
        <hr />
        <div className="right-2">
          <input type="text" placeholder='Coupon code' />
          <button>Add Code</button>
        </div>
        <hr />
        <div className="right-3">
          <div className="subtotal">
            <h4>Subtotal</h4>
            <h4>$ 9.99</h4>
          </div>
          <div className="subtotal">
            <h4>Shipping</h4>
            <h4>Calculated at next step</h4>
          </div>
        </div>
        <hr />
        <div className="right-4">
            <h4>Total</h4>
            <h1>$ 9.99</h1>
        </div>
        </div>
      </div>
      {/* <div className='footer'> */}
      <div class="footer">
            <div class="footer1">
                <h2>Candleaf</h2>
                <p>Your natural candle made for</p>
                <p>your home and for your wellness</p>
            </div>
            <div class="footer2">
                <h3>Discovery</h3>
                <p>New season</p>
                <p>Most searched</p>
                <p>Most selled</p>
            </div>
            <div class="footer3">
                <h3>About</h3>
                <p>Help</p>
                <p>Shipping</p>
                <p>Affiliate</p>
            </div>
            <div class="footer4">
                <h3>Info</h3>
                <p>Contact us</p>
                <p>PrivacyPolicies</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
        <div class="copyright">
            <h3>&copy;Candleaf All Rights Reserved.</h3>
            <h3>Designed by Udit</h3>
        </div>
      </div>
    // </div>
    
  )
}
