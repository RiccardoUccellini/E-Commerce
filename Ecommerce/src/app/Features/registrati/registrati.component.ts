import { Component, OnInit } from '@angular/core';
import { RegistrazioneService } from '../../services/registrazione/registrazione.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.scss']
})
export class RegistratiComponent implements OnInit {

  constructor(private RegistrazioneService: RegistrazioneService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(username, password, nome, cognome, cellulare, citta, cap, indirizzo) {

    this.RegistrazioneService.sendPostRequest(username, password, nome, cognome, cellulare, citta, cap, indirizzo).subscribe((data: any[])=>{
      alert("Registrazione avvenuta con successo!")
      this.router.navigateByUrl("/login");
    });
  }
}
