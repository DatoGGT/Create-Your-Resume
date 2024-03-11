
import { Component,  OnInit} from '@angular/core';
import { resume } from './Resume/resume.model';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  
  downloadPDF() {
    const data = document.getElementById('Html2pdf') as HTMLElement;

    html2canvas(data).then(canvas => {
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jspdf('p', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('resume.pdf');
    });
  }
    
  resuinfo = {
    Education:[''],
    Skilss:[''],
    Languages:[''],
    Summary:[''],
    Refferences:[''],

}
  title = 'Resume';
  resume: resume = new resume();
  resumeresult:resume[] = [];

  uploadImage(event:Event){
    let fileinput = event.target as HTMLInputElement;
    if(fileinput.files && fileinput.files[0]){
      let fileReader = new FileReader();
      fileReader.onload = ()=>{
        this.resume.image = fileReader.result as string;
      }
      fileReader.readAsDataURL(fileinput.files[0]);

    }

  }

  
  saveInfo(){
  this.resumeresult.push(this.resume);
  this.resume = new resume();
  
  } 
  
  
    addEducation(event: Event): void {
      if ((event as KeyboardEvent).key === 'Enter' && this.resume.Education.trim() !== '') {
        
        this.resuinfo.Education.push(this.resume.Education.trim());
        this.resume.Education = '';
      }
    }
    addSkilss(event: Event): void {
      if ((event as KeyboardEvent).key === 'Enter' && this.resume.Skilss.trim() !== '') {
        
        this.resuinfo.Skilss.push(this.resume.Skilss.trim());
        this.resume.Skilss = '';
      }
    }
    addLanguages(event: Event): void {
      if ((event as KeyboardEvent).key === 'Enter' && this.resume.Languages.trim() !== '') {
        
        this.resuinfo.Languages.push(this.resume.Languages.trim());
        this.resume.Languages = '';
      }
    }
    addExperience(event: Event): void {
      if ((event as KeyboardEvent).key === 'Enter' && this.resume.Summary.trim() !== '') {
        
        this.resuinfo.Summary.push(this.resume.Summary.trim());
        this.resume.Summary = '';
      }
    }
    addReferences(event: Event): void {
      if ((event as KeyboardEvent).key === 'Enter' && this.resume.Refferences.trim() !== '') {
        
        this.resuinfo.Refferences.push(this.resume.Refferences.trim());
        this.resume.Refferences = '';
      }
    }
    ngOnInit(): void {
      
    }

  }
  



