import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default ({size, onChange}) => {
    return (
      <div>
        <SelectField
          value={size} 
          onChange={onChange}
          floatingLabelText="Size of group:">
          <MenuItem value={1} primaryText="One" />
          <MenuItem value={2} primaryText="Pair Programming" />
          <MenuItem value={3} primaryText="Threesome" />
          <MenuItem value={4} primaryText="Quartet" />
        </SelectField>
      </div>
    );
}