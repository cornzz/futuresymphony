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
    billingAddress?: string
    proofOfPayment?: string
    referrer?: string
    files: {
        idCopyFile?: FileList
        pieceScoreFile?: FileList
        pieceDemoFile?: FileList
        proofOfPaymentFile?: FileList
    } = { idCopyFile: undefined, pieceScoreFile: undefined, pieceDemoFile: undefined, proofOfPaymentFile: undefined }

    reg_key?: string = ''
    lang?: string = ''
    
    id?: number
    registrationDate?: string
    paymentConfirmed?: boolean
    complete?: boolean
    secondRound?: boolean
}
