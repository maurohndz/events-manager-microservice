import { Service, Inject } from 'typedi';
import AuthService from '@Services/auth.service';
import ControllerBase from '@Tools/ControllerBase';

@Service()
class AuthController extends ControllerBase {
    constructor(@Inject() private authService: AuthService) {
        super()
    }

    login = this.commonController(async (req) => {
        return {
            message: '',
            statusCode: 200
        }
    })
}

export default AuthController;