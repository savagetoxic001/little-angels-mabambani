import jsPDF from 'jspdf'

export const generatePDF = (title, content) => {
  const doc = new jsPDF()
  doc.setFontSize(16)
  doc.text(title, 10, 10)
  doc.setFontSize(12)
  doc.text(content, 10, 30)
  doc.save(`${title}.pdf`)
}

export const generateReportCard = (studentData) => {
  const doc = new jsPDF()
  
  // Header
  doc.setFontSize(16)
  doc.text('Report Card', 20, 20)
  
  // Student Info
  doc.setFontSize(12)
  doc.text(`Student: ${studentData.name}`, 20, 40)
  doc.text(`Class: ${studentData.className}`, 20, 50)
  doc.text(`Term: ${studentData.term}`, 20, 60)
  
  // Grades table
  let yPos = 80
  doc.text('Subject\t\tGrade', 20, yPos)
  yPos += 10
  
  studentData.grades.forEach(grade => {
    doc.text(`${grade.subject}\t\t${grade.grade}`, 20, yPos)
    yPos += 10
  })
  
  doc.save(`${studentData.name}_ReportCard.pdf`)
}
