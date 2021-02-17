import Head from 'next/head';
import { css } from '@emotion/react';
import Link from 'next/link';

export default function Checkout() {
  return (
    <div>
      <form>
        <h2>Shipping:</h2>
        <br />

        <p>
          <label for="title">Title</label>
          <br />
          <input type="radio" id="title" value="mr">
            Mr
          </input>
          <input type="radio" id="title" value="mr">
            Mrs
          </input>
        </p>

        <p>
          <label for="first_name">First Name</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label for="last_name">Last Name</label>
          <br />
          <input type="text" name="last_name" required />
        </p>

        <p>
          <label for="mail">Email</label>
          <br />
          <input type="email" id="mail" name="user_email" required />
        </p>

        <p>
          <label for="street">Street name and number</label>
          <br />
          <input type="text" id="street" required />
          <label for="city">Postal code</label>
          <br />
          <input type="text" id="city" required />
        </p>

        <h2>Payment:</h2>
        <br />
        <p>
          <label for="card">Select credit card</label>
          <br />
          <select id="card">
            <option>Master Card</option>
            <option>Visa</option>
          </select>
          <br />
          <label for="owner">Card owner (Last name First name)</label>
          <br />
          <input type="text" id="owner" />
          <br />
          <label for="valid">Valid through (MM/YY)</label>
          <input type="text" id="valid" />
          <br />
          <label for="secret">CVV2 code</label>
          <br />
          <input type="text" id="secret" />
        </p>
      </form>
    </div>
  );
}
