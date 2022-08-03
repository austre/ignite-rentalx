import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute(): Specification[] {
        const specifications = this.specificationsRepository.list();
        return specifications;
    }
}

export { ListSpecificationsUseCase };
