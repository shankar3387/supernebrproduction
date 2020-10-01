import React, { Component } from 'react'
import * as $ from 'jquery';
// import 'jquery.payment'
export class SellerRegistration extends Component {

    render() {
        return (
          <div className="app-container mt-5" style={{backgroundColor: '#ffffff'}}>
          {/* Page Content */}
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-12 mb-3">
                <h2>Create Seller Account</h2>
              </div>
            </div>
          </div>
          <div className="container seller_account">
            <div className="row">
              <div className="col-lg-6">
                <h6 className="border_right"><span>Personal Information</span></h6>
                <div className="row pt-3">
                  <div className="col-lg-12">
                    <ul className="no-bullets d-flex align-item-center">
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio" /><small>I'm a Community Member</small>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check ml-5">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio" /><small>I'm not a Community Member</small>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>	
                </div>
                <div className="row pt-3">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id name defaultValue placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="email" className="form-control" id name defaultValue placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control" id name defaultValue placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="password" className="form-control" id name defaultValue placeholder="Password" />
                        </div>
                      </div>
                    </div>	
                  </div>
                  <div className="col-lg-4">
                    <div className>
                      <div style={{}}>	
                        <div id="image-preview" style={{width: '85% !important', height: '135px !important'}}>
                          <input type="hidden" name="LogoURL" defaultValue />
                          <img id="PhotoUrlImg" src="url.png" className="mCS_img_loaded" />
                          <input type="file" name="image" id="image-upload" />
                          <label htmlFor="image" id="image-label" />
                        </div>
                      </div>	
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <small>We will send you a text to verify your phone. <br /> Message and Data rates may apply.</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h6 className="border_right"><span>Shop Information</span></h6>
                <div className="row pt-3">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id name defaultValue placeholder="Shop Name" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id name defaultValue placeholder="Shop Address Line 1" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id name defaultValue placeholder="Shop Address Line 2" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="form-group">
                          <input type="text" className="form-control" id name defaultValue placeholder="Shop Phone Number" />
                        </div>
                      </div>
                      <div className="col-lg-7 pl-0">
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" id="customFile" />
                          <label className="custom-file-label" htmlFor="customFile">Upload Document</label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <select className="form-control" id="sel1">
                            <option>Select Community</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>	
                    </div>	
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-lg-6">
                <h6 className="border_right"><span>Bank Information</span></h6>
                <div className="row pt-3">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <select className="form-control" id="sel1">
                        <option disabled>Bank Location</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 form-group">
                    <input type="text" className="form-control" id name defaultValue placeholder="Bank Name" />
                  </div>
                  <div className="col-lg-12 form-group">
                    <input type="text" className="form-control" id name defaultValue placeholder="Account Holder Name" />
                  </div>
                  <div className="col-lg-12 form-group">
                    <input type="text" className="form-control" id name defaultValue placeholder="Account Number" />
                  </div>
                  <div className="col-lg-12 form-group">
                    <input type="text" className="form-control" id name defaultValue placeholder="Retype Account Number" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h6 className="border_right"><span>Card Details</span></h6>
                <div className="row pt-2">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card">
                          <label><small><b>Debit Card</b></small></label>
                          <div className="card-body db-card p-2 rounded">
                            <div className="col-lg-12">
                              <div className="row">
                                <div className="form-group col-lg-9 p-0"> 
                                  <label htmlFor="cc-number" className="control-label"><small>Card Number</small></label> <input id="cc-number" type="tel" className="input-lg form-control cc-number" autoComplete="cc-number" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                                </div>
                                <div className="form-group col-lg-3 p-0 d-flex justify-content-end pt-3">
                                  <i className="fa fa-cc-visa" aria-hidden="true" />
                                </div>
                              </div>	
                            </div>
                            <div className="form-group col-lg-9 p-0">
                              <label htmlFor="numeric" className="control-label"><small>Card Holder</small></label>
                              <input type="text" className="input-lg form-control" placeholder="Your Name" />
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="row">
                                  <div className="col-lg-4 pr-0">
                                    <div className="form-group"> <label htmlFor="cc-exp" className="control-label"><small>Card Through</small></label> <input id="cc-exp" type="tel" className="input-lg form-control cc-exp" autoComplete="cc-exp" placeholder="MM - DD" required /> </div>
                                  </div>
                                  <div className="col-lg-4 pr-0">
                                    <div className="form-group"> <label htmlFor="cc-exp" className="control-label"><small>Expiry Date</small></label> <input id="cc-exp" type="tel" className="input-lg form-control cc-exp" autoComplete="cc-exp" placeholder="MM - DD" required /> </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="form-group"> <label htmlFor="cc-cvc" className="control-label"><small>CVV</small></label> <input id="cc-cvc" type="tel" className="input-lg form-control cc-cvc" autoComplete="off" placeholder="••••" required /> </div>
                                  </div>
                                </div>	
                              </div>	
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card">
                          <label><small><b>Credit Card</b></small></label>
                          <div className="card-body db-card p-2 rounded">
                            <div className="col-lg-12">
                              <div className="row">
                                <div className="form-group col-lg-9 p-0"> 
                                  <label htmlFor="cc-number" className="control-label"><small>Card Number</small></label> <input id="cc-number" type="tel" className="input-lg form-control cc-number" autoComplete="cc-number" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                                </div>
                                <div className="form-group col-lg-3 p-0 d-flex justify-content-end pt-3">
                                  <i className="fa fa-cc-visa" aria-hidden="true" />
                                </div>
                              </div>	
                            </div>
                            <div className="form-group col-lg-9 p-0">
                              <label htmlFor="numeric" className="control-label"><small>Card Holder</small></label>
                              <input type="text" className="input-lg form-control" placeholder="Your Name" />
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="row">
                                  <div className="col-lg-4 pr-0">
                                    <div className="form-group"> <label htmlFor="cc-exp" className="control-label"><small>Card Through</small></label> <input id="cc-exp" type="tel" className="input-lg form-control cc-exp" autoComplete="cc-exp" placeholder="MM - DD" required /> </div>
                                  </div>
                                  <div className="col-lg-4 pr-0">
                                    <div className="form-group"> <label htmlFor="cc-exp" className="control-label"><small>Expiry Date</small></label> <input id="cc-exp" type="tel" className="input-lg form-control cc-exp" autoComplete="cc-exp" placeholder="MM - DD" required /> </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="form-group"> <label htmlFor="cc-cvc" className="control-label"><small>CVV</small></label> <input id="cc-cvc" type="tel" className="input-lg form-control cc-cvc" autoComplete="off" placeholder="••••" required /> </div>
                                  </div>
                                </div>	
                              </div>	
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>	
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-lg-6">
                <h6 className="border_right"><span>Identity Information</span></h6>
                <div className="row pt-3">
                  <div className="col-lg-4 pr-0">
                    <div className="form-group">
                      <select className="form-control identity_inform" id>
                        <option selected disabled>Select Identity</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 pl-0 form-group">
                    <input type="text" className="form-control" id name defaultValue placeholder="#" />
                  </div>
                  <div className="col-lg-4 pl-0 form-group">
                    <input type="text" className="form-control" id name defaultValue placeholder="Expiray Date" />
                  </div>
                  <div className="col-lg-12 form-group">
                    <input type="text" className="form-control" id name defaultValue placeholder="Full Name" />
                  </div>
                  <div className="col-lg-12 form-group">
                    <input type="text" className="form-control" id name defaultValue placeholder="Date of Birth" />
                  </div>
                  <div className="col-lg-12 form-group">
                    <input type="text" className="form-control" id name defaultValue placeholder="Address Line 1" />
                  </div>
                  <div className="col-lg-12 form-group">
                    <input type="text" className="form-control" id name defaultValue placeholder="Address Line 2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <button className="btn btn-default bg-warning text-white" type="button">SUBMIT</button>
                <button className="btn btn-default bg-warning text-white ml-3" type="button">CANCEL</button>
              </div>	
            </div>
          </div>
          {/* /#page-content-wrapper */}
        </div>
        
        )
    }
}

export default SellerRegistration
