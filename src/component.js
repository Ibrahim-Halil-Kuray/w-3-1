

export default function RenderApp () {
    return(
        <div>
    <div>
      <h5>Input Format</h5>
      <p>First line contains <b><i>N.N</i></b> lines follow, each having a PAN number</p>
    </div>
    <div>
        <h5>Constraints</h5>
        <ul>
            <li>1 &#8804; N &#8804; 10</li>
            <li>Each char is an uppercase letter,i.e.,<b><i>char</i></b>&#8712;["A","Z"]</li>
            <li>Each digit lies between 0 and 9 i.e., <b><i>digit</i></b> &#8712; [0,9].</li>
            <li>the lenght of the PAN number is always 10, i.e., <b><i>lenght</i>(PAN)=10</b> </li>
            <li>Every character in PAN is either char or digit satisfying the above constrains.</li>
        </ul>
    </div>
    <div>
        <h5>Output Format</h5>
        <p>For every PAN number listed print YES if it is valid and NO if it is not</p>
    </div>
  </div>
    )
}