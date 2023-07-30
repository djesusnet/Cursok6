import GetContacts from "./scenarios/contacts.js";
import GetNews from "./scenarios/news.js";
import {group , sleep} from 'k6';

export default() =>{

  group('Endpoint Get Contacts - API k6', () => {
    GetContacts();
  });

  group('Endpoint Get News - API k6', () => {
    GetNews();
 });

}