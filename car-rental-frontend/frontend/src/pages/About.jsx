import { Link } from "react-router-dom"

const About = () => {
  const features = [
    {
      title: "Wide Range of Cars",
      description: "Choose from economy, sedan, SUV and luxury vehicles."
    },
    {
      title: "Easy Booking",
      description: "Book your preferred car in just a few simple steps."
    },
    {
      title: "Secure Payments",
      description: "Safe and reliable payment experience."
    },
    {
      title: "24/7 Support",
      description: "Our support team is always ready to help."
    }
  ]

  const stats = [
    { value: "500+", label: "Cars" },
    { value: "10K+", label: "Happy Customers" },
    { value: "25+", label: "Cities" },
    { value: "24/7", label: "Support" }
  ]

  return (
    <div className="container py-5">
      <section className="text-center mb-5">
        <h1>About CarGo Rentals</h1>
        <p className="lead">
          Making car rentals simple, reliable and affordable.
        </p>
      </section>

      <section className="mb-5">
        <h2>Who We Are</h2>
        <p>
          CarGo Rentals is a modern car rental platform designed to
          simplify the booking experience. Customers can browse
          available vehicles, book cars, make payments and manage
          their bookings through one seamless application.
        </p>
      </section>

      <section className="mb-5">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a transparent, secure and
          user-friendly rental experience using modern web technologies.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-4">Why Choose Us?</h2>
        <div className="row">
          {features.map((feature) => (
            <div className="col-md-6 mb-4" key={feature.title}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <div className="row text-center">
          {stats.map((stat) => (
            <div className="col-6 col-md-3 mb-3" key={stat.label}>
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center btn-primary">
        <h2>Ready to begin?</h2>
        <Link
          to="/cars"
          className="btn btn-primary btn-lg w-100 mt-2"
        >
          Explore Cars
        </Link>
      </section>
    </div>
  )
}

export default About