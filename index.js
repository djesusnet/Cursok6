import GetContacts from "./scenarios/contacts.js";
import GetNews from "./scenarios/news.js";
import {group , sleep} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export default() =>{

  group('Endpoint Get Contacts - API k6', () => {
    GetContacts();
  });

  group('Endpoint Get News - API k6', () => {
    GetNews();
 });

}