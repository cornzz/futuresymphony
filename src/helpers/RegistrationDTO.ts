export class RegistrationDTO {
    firstName: string = ''
    lastName: string = ''
    email: string = ''
    dateOfBirth: string = ''
    country: string = ''
    idCopy?: string
    idCopyFile?: FileList
    pieceTitle?: string
    annotation?: string
    pieceScore?: string
    pieceScoreFile?: FileList
    pieceDemo?: string
    pieceDemoFile?: FileList
    instrumentation?: boolean[][]
    remarks?: string
    scoreConfirmations?: boolean[] = [false, false, false]
    proofOfPayment?: string
    proofOfPaymentFile?: FileList

    lang: string = ''
}
