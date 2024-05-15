import { Service } from 'typedi';
import { ENV_API } from '@Config/environment';
import { REGISTERED_INFORMATION } from '@Messages/error.messages';
import { CustomerRegister } from '@Typings/customer.interface';
import bcrypt from 'bcrypt';
import ServiceBase from '@Tools/ServiceBase';
import ManagementErrors from '@Tools/ManagementErrors';

@Service()
class CustomerService extends ServiceBase {

  /**
   * Customer registration
   * @param {CustomerRegister} customerData - Customer Data.
   * @returns {Promise<customer>} - Customer information.
   */
  async registerClient(customerData: CustomerRegister) {
    // Validate that the e-mail address is not registered
    await this.validateCustomerIsRegistered({ email: customerData.email });

    // Encrypt password
    const encryptedPassword = await bcrypt.hash(customerData.password, Number(ENV_API.BCRYPT_SALT));

    // TODO: Registration with temporary password

    // TODO: Notify registration by mail

    return await this.prisma.customer.create({
      data: {
        name: customerData.name,
        email: customerData.email,
        ...(customerData.phone && {
          phone: customerData.phone,
        }),
        ...(customerData.address && {
          address: customerData.address,
        }),
        credentials: {
          create: {
            password: encryptedPassword
          }
        }
      },
    });
  }

  /**
   * Validate if a customer's data is already registered
   * @returns {Promise<customer>} - Customer information.
   */
  async validateCustomerIsRegistered(condition, throwV = true) {
    const data = await this.prisma.customer.findFirst({
      where: condition
    });

    if (data && throwV) throw new ManagementErrors(REGISTERED_INFORMATION);

    return data;
  }
}

export default CustomerService;
