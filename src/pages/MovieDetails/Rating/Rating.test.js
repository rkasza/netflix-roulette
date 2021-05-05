import { shallow } from 'enzyme';
import Rating, { getRatingColor } from './Rating';


describe('<Rating>', () => {
  it('should render without crashing', () => {
    shallow(<Rating>{3}</Rating>);
  });

  describe('[getRatingColor]', () => {
    it.each`
      rating  | color
      ${1}    | ${'#f65261'}
      ${2.3}  | ${'#f65261'}
      ${3.3}  | ${'#f65261'}
      ${4}    | ${'#ffa500'}
      ${5.9}  | ${'#ffa500'}
      ${6}    | ${'#fdff00'}
      ${8}    | ${'#7bb256'}
      ${9.9}  | ${'#7bb256'}
      ${10}   | ${'#7bb256'}
    `('rating $rating should return color code: $color',
      ({ rating, color }) => {
        expect(getRatingColor(rating)).toEqual(color);
    });    
  })
  describe('Invalid Rating', () => {
    it('should render \'N/A\' with invalid rating', () => {
      // check undefined
      const wrapper = shallow(<Rating />);
      expect(wrapper.text()).toEqual('N/A');
      // check rating > 0 || rating < 10
      wrapper.setProps({ rating: -1 });
      wrapper.update()
      expect(wrapper.text()).toEqual('N/A');
      wrapper.setProps({ rating: 10 });
      wrapper.update()
      expect(wrapper.text()).toEqual('N/A');
      // null
      wrapper.setProps({ rating: null });
      wrapper.update()
      expect(wrapper.text()).toEqual('N/A');
      
    })
  })
});
