export class RegistrationDTO {
    firstName: string = ''
    lastName: string = ''
    email: string = ''
    dateOfBirth: string = ''
    country: string = ''
    idCopy?: { value: string, files: FileList } = { value: '', files: undefined}

    pieceTitle?: string
    annotation?: string
    pieceScore?: { value: string, files: FileList } = { value: '', files: undefined}
    pieceDemo?: { value: string, files: FileList } = { value: '', files: undefined}
    instrumentation?: string
    remarks?: string

    lang: string = ''
}
