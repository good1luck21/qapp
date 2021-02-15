class Category < ActiveHash::Base
    self.data = [
        {id: 1, name: 'rails'},
        {id: 2, name: 'react'},
        {id: 3, name: 'javascript'},
        {id: 4, name: 'Ajax'},
        {id: 5, name: 'php'},
        {id: 6, name: 'python'},
        {id: 7, name: 'other'}
    ]
end