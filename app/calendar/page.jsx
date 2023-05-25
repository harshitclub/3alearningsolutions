import "./style.css";
import { VscUnlock } from "react-icons/vsc";
import { CalendarDetails } from "./programData";

const Calendar = () => {
  return (
    <>
      <section className="calendarContainer width100 flex alignCenter justifyCenter flexColumn">
        <div className="calendarContent width95 maxWidth">
          <h2>
            UNLOCK YOUR LEARNING POTENTIAL{" "}
            <VscUnlock className="margin-2 calendarContentIcon" />
            <br />
            <span>EXPLORE OUR UPCOMING PROGRAMS AND TRAINING</span>
          </h2>
          <div className="calDivider"></div>
          <div className="calDivider2"></div>
          <p>
            Discover a world of knowledge and growth with our comprehensive
            calendar of upcoming programs and trainings. Stay ahead of the curve
            and unlock your potential by exploring a diverse range of learning
            opportunities throughout the year.
          </p>
        </div>
      </section>
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
