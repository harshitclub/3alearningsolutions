import "./style.css";
import { VscUnlock } from "react-icons/vsc";
import { CalendarDetails } from "./programData";
import PageSubHeader from "@/components/PageSubHeader/PageSubHeader";

const Calendar = () => {
  return (
    <>
      <PageSubHeader
        heading="UNLOCK YOUR LEARNING POTENTIAL"
        subHeading="EXPLORE OUR UPCOMING PROGRAMS AND TRAINING"
        para="Discover a world of knowledge and growth with our comprehensive
        calendar of upcoming programs and trainings. Stay ahead of the curve
        and unlock your potential by exploring a diverse range of learning
        opportunities throughout the year."
      />
      <section className="calendarData flex alignCenter justifyCenter flexColumn width100">
        <div className="calendarTab width95">
          <h2>Upcoming Open House Training Programs Online (2023)</h2>
          <div className="calendar">
            <table>
              <thead>
                <tr>
                  <th scope="col">Program</th>
                  <th scope="col" className="days">
                    Days
                  </th>
                  <th scope="col" className="dates">
                    Dates
                  </th>
                  <th scope="col" className="invest">
                    Price (₹)
                  </th>
                  <th scope="col" className="location">
                    Location
                  </th>
                  <th scope="col" className="details">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {CalendarDetails.map((item) => {
                  return (
                    <tr>
                      <td data-label="Program">{item.name}</td>
                      <td data-label="Days">{item.days}</td>
                      <td data-label="Dates">{item.dates}</td>
                      <td data-label="Investment (₹)">{item.investments}</td>
                      <td data-label="Location">{item.location}</td>
                      <td data-label="Details">
                        <a href="/">{item.details}</a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p>
              Group Discount: 15% discount in case of nominating 4 or more
              people in any program from the same organization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calendar;
