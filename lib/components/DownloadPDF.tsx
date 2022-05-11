export default function DownloadPDF() {
  return (
    <>
      <form action="https://github.com/DanielMateosLab/danielmatlab/raw/main/daniel_mateos_labrador.pdf">
        <button className="dw-pdf" type="submit">
          Download PDF
        </button>
      </form>

      <style jsx>
        {`
          .dw-pdf {
            position: fixed;
            bottom: 2rem;
            right: 10vw;
            font-family: "Raleway";
            padding: 0.5rem;
            background-color: #e5f1ee;
            border: 1px solid #c2c4fe;
            border-radius: 4px;
            cursor: pointer;
          }
          .dw-pdf:hover {
            background-color: #dce5f2;
          }
          .dw-pdf:active {
            background-color: #c2c4fe;
          }
        `}
      </style>
    </>
  )
}
