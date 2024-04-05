import { Service, Inject } from 'typedi';
import CustomerService from '@Services/customer.service';
import ControllerBase from '@Tools/ControllerBase';

@Service()
class CustomerController extends ControllerBase {
    constructor(@Inject() private customerService: CustomerService) {
        super()
    }

    register = this.commonController(async (req) => {
        return await this.customerService.registerClient(req.body)
            .then((customer) => {
                return {
                    statusCode: 200,
                    message: 'Successful operation',
                    data: customer
                }
            });
    })
}

export default CustomerController;