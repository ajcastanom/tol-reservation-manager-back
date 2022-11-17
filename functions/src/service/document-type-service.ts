import {firebaseConfig} from "../utils/utils";
import {Collection} from "../enum/collection-enum";
const admin = require("firebase-admin");

const firebase = require("firebase");

export class DocumentTypeService {
    private static instance: DocumentTypeService;
    private readonly documentTypeRef: any;

    private constructor() {
        firebase.initializeApp(firebaseConfig);
        this.documentTypeRef = admin.firestore().collection(Collection.DOCUMENT_TYPE);
    }

    public static getInstance(): DocumentTypeService {
        if (!DocumentTypeService.instance) {
            DocumentTypeService.instance = new DocumentTypeService();
        }

        return DocumentTypeService.instance;
    }

    public async create(documentType: any): Promise<any> {
        const documentTypeData = await this.documentTypeRef.where("type", "==", documentType.type.trim()).get();

        let createResult = null;

        if (documentTypeData.empty) {
            createResult = await this.documentTypeRef.add({
                name: documentType.name.trim(),
                type: documentType.type.trim(),
            });
        }

        return createResult;
    }

    public async list(): Promise<any[]> {
        const documentTypeData = await this.documentTypeRef.orderBy("name").get();

        const listResult: any[] = [];

        if (!documentTypeData.empty) {
            documentTypeData.forEach((doc: any) => {
                listResult.push(doc.data());
            });
        }

        return listResult;
    }
}
