
const contact = () => {
  // contact items
  const div = document.getElementById('mainContent');
  const divContact = document.createElement('DIV');
  const h2 = document.createElement('H2');
  const para = document.createElement('P');
  const divContainer = document.createElement('DIV');
  const divEmail = document.createElement('DIV');
  const divPhone = document.createElement('DIV');
  const divAddress = document.createElement('DIV');

  const email = document.createElement('H3');
  const phone = document.createElement('H3');
  const address = document.createElement('H3');

  const emailCollection = document.createElement('DIV');
  const phoneCollection = document.createElement('DIV');
  const addressCollection = document.createElement('DIV');

  const firstEmail = document.createElement('P');
  const secondEmail = document.createElement('P');
  const firstPhone = document.createElement('P');
  const secondPhone = document.createElement('P');
  const firstAddressLine = document.createElement('P');
  const secondAddressLine = document.createElement('P');

  const iframe = document.createElement('iframe');

  // contact attributes
  divContact.setAttribute('class', 'contact');
  divContainer.setAttribute('class', 'contact-container');
  divEmail.setAttribute('class', 'contact-collection');
  divPhone.setAttribute('class', 'contact-collection');
  divAddress.setAttribute('class', 'contact-collection');

  iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12085.156249140793!2d-73.9794010640625!3d40.77765884446539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x505d79b92e16a75e!2sNew-York%20Historical%20Society!5e0!3m2!1ses-419!2smx!4v1592406417731!5m2!1ses-419!2smx');
  iframe.setAttribute('width', '600');
  iframe.setAttribute('height', '450');

  // contact content
  h2.innerHTML = 'GIVE US A CALL';
  para.innerHTML = "Let's stay in touch, you are part of the family.";
  email.innerHTML = 'EMAIL';
  phone.innerHTML = 'PHONE';
  address.innerHTML = 'ADDRESS';

  firstEmail.innerHTML = 'kitchen@coconutmojo.com';
  secondEmail.innerHTML = 'support@coconutmojo.com';
  firstPhone.innerHTML = '415.555.9XYX';
  secondPhone.innerHTML = '488.222.1XYX';
  firstAddressLine.innerHTML = '170 Central Park West';
  secondAddressLine.innerHTML = 'New York, NY 10024';

  // contact page
  emailCollection.append(firstEmail, secondEmail);
  phoneCollection.append(firstPhone, secondPhone);
  addressCollection.append(firstAddressLine, secondAddressLine);

  divEmail.append(email, emailCollection);
  divPhone.append(phone, phoneCollection);
  divAddress.append(address, addressCollection);

  divContainer.append(divEmail, divPhone, divAddress);
  divContact.append(h2, para, divContainer, iframe);
  div.appendChild(divContact);
};

export default contact;
