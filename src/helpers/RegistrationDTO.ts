export class RegistrationDTO {
    firstName: string = ''
    lastName: string = ''
    email: string = ''
    dateOfBirth: string = ''
    country: string = ''
    idCopy?: { value: string, files: FileList } = { value: '', files: undefined }
    lang: string = ''
}