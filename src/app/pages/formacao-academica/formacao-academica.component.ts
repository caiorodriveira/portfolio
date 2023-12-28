import { CertificadoDialogComponent } from './../../dialogs/certificado-dialog/certificado-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-formacao-academica',
  templateUrl: './formacao-academica.component.html',
  styleUrls: ['./formacao-academica.component.css']
})
export class FormacaoAcademicaComponent {

  certificados: any = [
    {src: "assets/certificates/cisco_certificado.png", alt: "CISCO Certificado"},
    {src: "assets/certificates/quebec_java_certificado.png", alt: "Québec Java Certificado"},
    // {src: "assets/certificates/swagger_certificado.png", alt: "Swagger SpingBoot Certificado"},
    {src: "assets/certificates/lgpd_certificado.png", alt: "LGPD Certificado"},
    {src: "assets/certificates/oracle_database_design_certificado.png", alt: "Oracle Academy Certificado"},
    {src: "assets/certificates/scrum_certificado.png", alt: "Scrum Fundamentals Certificado"},
    {src: "assets/certificates/oracle_database_programming_certificado.png", alt: "Oracle Academy Certificado"},
    {src: "assets/certificates/cisco_certificado_2.png", alt: "CISCO Certificado"},
  ]

  constructor(public dialog: MatDialog){

  }

  // openDialog(srcImg: string, altImg: string): void {
  //   const dialogRef = this.dialog.open(CertificadoDialogComponent, {
  //     data: {src: srcImg, alt: altImg},
  //     enterAnimationDuration: "0.5s",
  //     exitAnimationDuration: "0.3s"
  //   });

  //   dialogRef.afterClosed().subscribe(() => {});
  // }

  viewFile(url: string): void{
    window.open(url)
  }
}


