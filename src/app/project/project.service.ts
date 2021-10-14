import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@app/models/Project';
import { LogService } from '@app/shared/log.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // projects: Project[] = [
  //   {
  //     id: 1,
  //     code: 'NHusYJl',
  //     name: 'Progetto Alpha',
  //     description: 'Lorem ipsum dolor sit amet.',
  //     start: new Date(2021, 1, 30),
  //     end: new Date(2021, 3, 15),
  //     priority: 'medium',
  //     done: true,
  //     tasks: []
  //   },
  //   {
  //     id: 2,
  //     code: 'SJieYKL',
  //     name: 'Progetto Beta',
  //     description: 'Lorem ipsum dolor sit amet.',
  //     start: new Date(2019, 3, 30),
  //     end: new Date(2019, 6, 15),
  //     priority: 'low',
  //     done: true,
  //     tasks: []
  //   },
  //   {
  //     id: 3,
  //     code: 'POjeGBs',
  //     name: 'Progetto Gamma',
  //     description: 'Lorem ipsum dolor sit amet.',
  //     start: new Date(2019, 8, 15),
  //     priority: 'low',
  //     done: false,
  //     tasks: []
  //   }
  // ]

  // private projectSubject = new BehaviorSubject<Project[]>(this.projects);
  // public project$ = this.projectSubject.asObservable();

  constructor(private logService: LogService, private httpClient: HttpClient) {}

  getAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('http://localhost:3000/projects')
    .pipe(
      tap((data) => this.logService.log(`getAll Eseguito ${data}`)),
      retry(3),
      catchError(this.handleError)
    );
    // this.logService.log('getAll Eseguito');
    // return this.project$.pipe(
    //   tap(() => this.logService.log('getAll Eseguito'))
    // );
    // return [...this.projects];
  }

  add(project: Project): Observable<Project> {
    const projectToAdd = {
      ...project,
      // id: this.projects.length, //RIMOSSO PERCHE'GESTITO DA JSON-SERVER
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: []
    }
    return this.httpClient.post<Project>('http://localhost:3000/projects', projectToAdd)
    .pipe(
      tap((data) => this.logService.log(`add Eseguito ${data}`)),
      retry(3),
      catchError(this.handleError)


    );
    // this.logService.log('add Eseguito');
    // this.projects.push({
      // ...project,
      // id: this.projects.length,
      // code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      // done: false,
    // }
    // );
    // this.projectSubject.next(this.projects.slice());
  }

  get(id: number): Observable<Project> {
    return this.httpClient.get<Project>(`http://localhost:3000/projects/${id}`)
    .pipe(
      tap((data) => this.logService.log(`get Eseguito ${data}`)),
      retry(3),
      catchError(this.handleError)


    );
    // this.logService.log('get Eseguito');
    // return this.projects.find(project => project.id === id) as Project;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, `+
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

}
