import React from 'react';

function AppTable() {
    return (
      <div className="App">
        <h1>Form Pembelian Buah</h1>
        <form>
          <table>
            <tr>
              <th>
                <label for="nama">Nama Pelanggan</label>
              </th>
              <td>
                <input type="text" id="nama" name="nama"/><br/>
              </td>
            </tr><br/>
            <tr>
              <th>
                Daftar Item
              </th>
              <td>
                <input type="checkbox" id="semangka" name="semangka"/>
                <label for="semangka">Semangka</label><br/>
                <input type="checkbox" id="jeruk" name="jeruk"/>
                <label for="jeruk">Jeruk</label><br/>
                <input type="checkbox" id="nanas" name="nanas"/>
                <label for="nanas">Nanas</label><br/>
                <input type="checkbox" id="salak" name="salak"/>
                <label for="salak">Salak</label><br/>
                <input type="checkbox" id="anggur" name="anggur"/>
                <label for="anggur">Anggur</label>
              </td> 
            </tr>
            <tr>
                <td>
                  <button type="submit">Kirim</button>
                </td>
            </tr>
          </table>
        </form>
      </div>
    );
}

export default AppTable;