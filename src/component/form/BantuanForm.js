import React from "react";
import "./bantuan.css";

const BantuanForm = () => {
    return (
        <div className="bantuan-form-container">
            <h2>Apply for Social Assistance</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" className="form-control" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea id="address" className="form-control" placeholder="Enter your address" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit Application</button>
            </form>
        </div>
    );
}

export default BantuanForm;