import React from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import tr from "../translation.json";

const Tickets = () => {
  return (
    <div className="ui container">
      <Navbar />
      <Titlebar title={tr.tickets} />
      <div className="ui segment">
        <div className="ui pilled segment">
          <div class="ui toggle checkbox">
            <input type="checkbox" tabindex="0" class="hidden" />
            <label>sdsd</label>
          </div>
        </div>
        <table className="ui fixed single line striped selectable table">
          <thead>
            <tr>
              <th className="center aligned one wide">#</th>
              <th className="center aligned one wide">{tr.code}</th>
              <th className="right aligned seven wide">{tr.subject}</th>
              <th className="center aligned two wide">{tr.department}</th>
              <th className="center aligned three wide">{tr.user}</th>
              <th className="center aligned two wide">{tr.status}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="center aligned">1</td>
              <td className="center aligned">TK254</td>
              <td className="right aligned">موضوع تست</td>
              <td className="center aligned">حسابداری</td>
              <td className="center aligned">مرتضی علی یاری</td>
              <td className="center aligned">در حال پیشرفت</td>
            </tr>
            <tr>
              <td className="center aligned">1</td>
              <td className="center aligned">TK254</td>
              <td className="right aligned">this is test</td>
              <td className="center aligned">financial</td>
              <td className="center aligned">Morteza Aliyari</td>
              <td className="center aligned">Pending</td>
            </tr>
            <tr>
              <td className="center aligned">1</td>
              <td className="center aligned">TK254</td>
              <td className="right aligned">this is test</td>
              <td className="center aligned">financial</td>
              <td className="center aligned">Morteza Aliyari</td>
              <td className="center aligned">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
