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
    {src: "assets/certificates/swagger_certificado.png", alt: "Swagger SpingBoot Certificado"},
    {src: "assets/certificates/security_certificado.png", alt: "Security SpingBoot Certificado"},
  ]

  constructor(public dialog: MatDialog){

  }

  openDialog(srcImg: string, altImg: string): void {
    const dialogRef = this.dialog.open(CertificadoDialogComponent, {
      data: {src: srcImg, alt: altImg},
      enterAnimationDuration: "0.5s",
      exitAnimationDuration: "0.3s"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

  viewFile(url: string): void{
    window.open(url)
  }
}


