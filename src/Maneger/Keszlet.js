export default function Keszlet() {
  return (

    <div className="App">
      Termék Lista
      
      <table style={{
        backgroundColor:"black",
        color:"white",
        borderRadius:"5px 5px 10px"
    }}>
        <tr>
          <th>Termék</th>
          <th>Leirás</th>
          <th>ár</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table>

    </div>
  );
}
