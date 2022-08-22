import _ from "lodash";  
import { Category } from "./category";

describe('Category Unit Tests', () => {
    test('constructor of category',() => {
        let category = new Category({name: 'Movie'});
        let props = _.omit(category.props,['created_at'])
        expect(props).toStrictEqual({
            name: 'Movie',
            description: null,
            is_active: true,
        });
        expect(category.created_at).toBeInstanceOf(Date);
    })
});