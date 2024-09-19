import * as enums from '../utils/enums/Contact';

class Contact {
  name: string;
  mail: string;
  telNumber: number;
  category: enums.Category;

  constructor(
    name: string,
    mail: string,
    telNumber: number,
    category: enums.Category
  ) {
    this.name = name;
    this.mail = mail;
    this.telNumber = telNumber;
    this.category = category;
  }
}

export default Contact;
