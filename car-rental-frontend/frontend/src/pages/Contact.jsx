const Contact = () => {
  return (
    <div className="container py-5">
      <section className="text-center mb-5">
        <h1>Contact Us</h1>
        <p className="lead">
          We'd love to hear from you.
        </p>
      </section>
      
      <div className="row">
        <div className="col-lg-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="mb-4">
                Send us a Message
              </h3>

              <input
                className="form-control mb-3"
                placeholder="Full Name"
              />

              <input
                className="form-control mb-3"
                placeholder="Email"
              />

              <input
                className="form-control mb-3"
                placeholder="Subject"
              />

              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Your Message"
              />

              <button className="btn btn-primary btn-lg w-100 mt-2">
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3>Contact Information</h3>
              <hr />
              <p><strong>Email:</strong> support@cargorentals.com</p>

              <p><strong>Phone:</strong> +91 9876543210</p>

              <p><strong>Address:</strong> Hyderabad, Telangana</p>

              <p><strong>Working Hours:</strong></p>

              <p>Monday - Saturday</p>

              <p>9:00 AM - 8:00 PM</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact