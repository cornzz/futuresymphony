export class RegistrationDTO {
    firstName: string = ''
    lastName: string = ''
    email: string = ''
    dateOfBirth: string = ''
    country: string = ''
    idCopy?: string
    pieceTitle?: string
    annotation?: string
    pieceScore?: string
    pieceDemo?: string
    instrumentation?: boolean[][]
    remarks?: string
    scoreConfirmations?: boolean[] = [false, false, false]
    proofOfPayment?: string
    files: {
        idCopyFile?: FileList
        pieceScoreFile?: FileList
        pieceDemoFile?: FileList
        proofOfPaymentFile?: FileList
    } = { idCopyFile: undefined, pieceScoreFile: undefined, pieceDemoFile: undefined, proofOfPaymentFile: undefined }

    lang: string = ''
}
