export class ResponsePageable{
    content: any[] | undefined;
    first: boolean = false;
    last: boolean = false;
    number: number | undefined;
    numberOfElements: number | undefined;
    pageable: any[] = [];
    size: number | undefined;
    sort: number | undefined;
    totalElements: number | undefined;
    totalPages: number | undefined;

}