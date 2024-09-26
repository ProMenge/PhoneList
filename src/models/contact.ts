import * as enums from '../utils/enums/Contact';

class Contact {
  name: string;
  mail: string;
  telNumber: number;
  category: enums.Category;
  id: number;

  constructor(name: string, mail: string, telNumber: number, category: enums.Category, id: number) {
    this.name = name;
    this.mail = mail;
    this.telNumber = telNumber;
    this.category = category;
    this.id = id;
  }
}

export default Contact;
