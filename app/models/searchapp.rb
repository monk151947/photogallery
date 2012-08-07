class Searchapp < ActiveRecord::Base
  has_many :assets
  attr_accessible :content, :file_name
  attr_accessible :assets_attributes
  accepts_nested_attributes_for :assets, :allow_destroy=> true
end

