import React from "react"

export default function Accordion ({ title2, content, tail }) {
  return (
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <p class="accordion-header" id={(`panelsStayOpen-heading${tail}`)}>
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={(`#panelsStayOpen-collapse${tail}`)} aria-expanded="true" aria-controls={(`panelsStayOpen-collapse${tail}`)}>
            <strong>{title2}</strong>
          </button>
        </p>
        <div id={(`panelsStayOpen-collapse${tail}`)} class="accordion-collapse collapse show" aria-labelledby={(`panelsStayOpen-heading${tail}`)}>
          <div class="accordion-body">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}