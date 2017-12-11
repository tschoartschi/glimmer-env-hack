import Component, {tracked} from '@glimmer/component';
import Env from '../../../../config/user-env';

export default class GlimmerEnvHack extends Component {
    @tracked state = {
        helloWorldString: Env.helloWorld
    }
}
