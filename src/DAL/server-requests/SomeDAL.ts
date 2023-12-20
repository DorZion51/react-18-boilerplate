import { GetSomeResponseType } from '../../models/ResponseTypes';
import { backendServiceInstance } from './AxiosInstances';

// example to server request by the axios instances
export const getSome = async (id: string): Promise<GetSomeResponseType> => {
    try {
        const response = await backendServiceInstance.get<GetSomeResponseType>(`getSome?id=${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
