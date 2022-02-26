export class RegistrationDTO {
    firstName: string = ''
    lastName: string = ''
    email: string = ''
    dateOfBirth: string = new Date().toISOString().slice(0, 10)
    country: string = ''
}