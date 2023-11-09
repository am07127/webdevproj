import React from 'react';

function AddressForm() {
  return (
    <form className="row g-3" style={{paddingBottom:"100px"}}>
      <div className="col-md-6">
        <div className="p-4 bg-light border">
          <h2>Address:</h2>
          <div className="mb-3">
            <h4>Branch 1:</h4>
            <p>Defence</p>
            <p>Khy-e-Nishat, Phase 6</p>
          </div>
          <div className="mb-3">
            <h4>Branch 2:</h4>
            <p>KDA</p>
            <p>Scheme 1 (Service Lane Karsaz)</p>
          </div>
          <div className="mb-3">
            <h4>Take Away</h4>
            <p>0324-5432789</p>
          </div>
          <div className="mb-3">
            <h4>Delivery</h4>
            <p>0324-8984321</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="p-4 border">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.840478030852!2d67.07087757385348!3d24.80091534764053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33cf218528e81%3A0x30e45cf46975914c!2sKhayaban-e-Nishat%2C%20Ittehad%20Commercial%20Area%20Phase%206%20Defence%20Housing%20Authority%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698303710366!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </form>
  );
}

export default AddressForm;
