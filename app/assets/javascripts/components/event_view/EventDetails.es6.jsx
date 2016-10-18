class EventDetails extends React.Component {
  render() {
    const { title, date, host } = this.props.details
    const { venueChoices } = this.props
    return(
      <div className="col s4 valign-wrapper">
       <div>
        <h4>{title}</h4>
        {venueChoices.map((venueChoice, i) =>
          <VenueChoice key={i} venueChoice={venueChoice} />
        )}
        </div>
      </div>
    );
  }
}
