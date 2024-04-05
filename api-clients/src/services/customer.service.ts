import { Service } from 'typedi';
import { Customer } from '@prisma/client';
import { CustomerRegister } from '@Typings/customer.interface';
import ServiceBase from '@Tools/ServiceBase';
import { SERVER_ERROR } from '@Messages/error.messages';

@Service()
class CustomerService extends ServiceBase {

  /**
   * Customer registration
   * @param {CustomerRegister} customerData - Customer Data.
   * @returns {Promise<Customer>} - Customer information.
   */
  async registerClient(customerData: CustomerRegister) {
    const customer = await this.prisma.customer.create({
      data: {
        name: customerData.name,
        email: customerData.email,
        ...(customerData.phone && {
          contact: {
            phone: customerData.phone,
          },
        }),
      },
    });


    return customer;
  }
}

export default CustomerService;
